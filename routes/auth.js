const express = require('express');
const router = express.Router();
const { registerUser, loginUser, forgotPassword } = require('../controllers/authController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', authMiddleware,forgotPassword);

module.exports = router;
