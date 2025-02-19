const express = require('express');
const { register, login, verifyEmail } = require('../controllers/authController');
const router = express.Router()

router.post('/auth/register', register);
router.get('/auth/verify/:token', verifyEmail);
router.post('/auth/login', login);

module.exports = router;