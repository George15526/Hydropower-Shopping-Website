// authContoller.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/mysql/User');
const { sequelize } = require('../config/db');

const JWT_SECRET = 'JWT_SECRET';

// 用戶註冊
exports.register = async (req, res) => {
    const { name, email, password } = req.body;    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    try {
        const user = await User.findOne({ where: { email: email } });
        if (user) {
            return res.status(400).json({
                status: 'error',
                message: 'Email already in use',
            });
        }
        const newUser = await User.create({
            name: name,
            email: email,
            password: hashedPassword
        });
        return res.json({
            status: 'success',
            message: 'User registered successfully',
            data: {
                newUser,
            },
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Database error',
        });
    };
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