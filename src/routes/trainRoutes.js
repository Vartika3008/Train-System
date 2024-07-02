// src/routes/trainRoutes.js
const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');
const auth = require('../config/auth');

router.get('/trains', auth, trainController.getTrainsByRoute);

module.exports = router;
