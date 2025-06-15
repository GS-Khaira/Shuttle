const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authentication');

router.post('/signup', authController.signup);

router.post('/signIn', authController.signIn);

router.get('/checkSession', authController.checkSession);

router.post('/logout', authController.logout);

module.exports = router;