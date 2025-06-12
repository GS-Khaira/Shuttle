const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authentication');

router.post('/signup', authController.signup);

router.post('/signIn', authController.signIn);

module.exports = router;