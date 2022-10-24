const express = require('express');
const router = express.Router();
const { getHourlyUsage } = require('../controllers/hourly');

// Retrieve hourly energy usage
router.get('/', getHourlyUsage);

module.exports = router;
