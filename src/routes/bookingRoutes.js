// src/routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const auth = require('../config/auth');

router.post('/book', auth, bookingController.bookSeat);
router.get('/bookings', auth, bookingController.getBookingDetails);

module.exports = router;
