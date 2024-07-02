// src/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const adminAuth = require('../config/adminAuth');

router.post('/train/add', adminAuth, adminController.addTrain);
router.put('/train/:trainId/updateSeats', adminAuth, adminController.updateSeats);

module.exports = router;
