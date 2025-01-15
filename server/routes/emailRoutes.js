const express = require('express');
const sendEmail = require('../controllers/emailController.js');

const router = express.Router();

router.post('/send-emails', sendEmail);

module.exports = router;
