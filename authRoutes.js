const express = require('express');
const { login, profile, adminDashboard } = require('./authController');
const authMiddleware = require('./authMIddleware');

const router = express.Router();

// Public route
router.post('/login', login);

// Protected routes
router.get('/profile', authMiddleware(), profile);
router.get('/admin-dashboard', authMiddleware(["admin"]), adminDashboard);

module.exports = router;
