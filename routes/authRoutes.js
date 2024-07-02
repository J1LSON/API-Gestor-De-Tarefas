const express = require('express');
const { register, login, recoverPassword } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
//router.post('/recover-password', recoverPassword);

module.exports = router;
