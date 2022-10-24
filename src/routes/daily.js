const express = require('express');
const router = express.Router();
const { getDailyUsage } = require('../controllers/daily');

// Retrieve daily energy usage
router.get('/', getDailyUsage);

module.exports = router;
