const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'george950506@gmail.com',
        pass: 'wlgf mupl jxlk mlxw',
    }
});

const sendVerification = async (email, token) => {
    try {
        const verificationLink = `http://localhost:3001/api/v1/verify/${token}`;
    
        const mailOptions = {
            from: 'george950506@gmail.com',
            to: email,
            subject: 'Email verification',
            text: `Click the following link to verify your email: ${verificationLink}`,
        };
    
        const info = await transporter.sendMail(mailOptions);
        console.log('Send mail successfully:', info);
    } catch (error) {
        console.error('Error sending email:', error);
    };
};

module.exports = { sendVerification };