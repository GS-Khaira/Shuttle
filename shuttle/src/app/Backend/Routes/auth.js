const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authentication');
const rideController = require('../Controllers/ride');

router.post('/signup', authController.signup);

router.post('/signIn', authController.signIn);

router.get('/checkSession', authController.checkSession);

router.post('/logout', authController.logout);

router.post('/postRide', rideController.postRide);

router.get('/findRide', rideController.findRide);

module.exports = router;