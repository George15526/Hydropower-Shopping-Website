// authContoller.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/mysql/User');
const { sendVerification } = require('../utils/email');

const JWT_SECRET = 'JWT_SECRET';

// 用戶註冊
exports.register = async (req, res) => {
    /*
    URI: api/v1/register
    Method: POST
    Description: User register
    Type: application/json
    Request: 
        {
            "name": string,
            "email": string,
            "password": string
        }
    Response:
        200:
            {
                "status": "success",
                "message": "User registered successfully",
                "data": {
                    newUser,
                },
            }
        400:
            {
                "status": "error",
                "message": "Email already in use",
            }
        500:
            {
                "status": "error",
                "message": "Database error",
            }
    */
    const { name, email, password } = req.body;    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    try {
        const existingUser = await User.findOne({ where: { email: email } });
        if (existingUser) {
            return res.status(400).json({
                status: 'error',
                message: 'Email already in use',
            });
        }
        const user = await User.create({
            name: name,
            email: email,
            password: hashedPassword
        });

        const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
        console.log(token);

        await sendVerification(email, token);

        return res.status(201).json({
            status: 'success',
            message: 'User registered. Please verify your email.',
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Database error',
        });
    };
};

exports.verifyEmail = async (req, res) => {
    try {
        const { token } = req.params;
        const decoded = jwt.verify(token, JWT_SECRET);

        await User.update(
            { isVerified: true },
            {
                where: {
                    email: decoded.email,
                },
            },
        );

        res.send('Email verified successfully');
    } catch (error) {
        res.status(400).send('Invalid or expired token');
    }
};

// 用戶登入
exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({where: { email: email }});
    if (!user) {
        return res.status(400).json({ error: 'Invalid credentials' });
    };
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ error: 'Invalid credentials' });
    };
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};