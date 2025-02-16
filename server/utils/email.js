const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'george950506@gmail.com',
        pass: 'wlgf mupl jxlk mlxw',
    }
});

const sendVerification = async (email, token) => {
    console.log('This is sendVerification');
    const verificationLink = `http://localhost:3001/api/v1/verify/${token}`;

    const mailOptions = {
        from: 'george950506@gmail.com',
        to: email,
        subject: 'Email verification',
        text: `Click the following link to verify your email: ${verificationLink}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Send mail successfully');
};

module.exports = { sendVerification };