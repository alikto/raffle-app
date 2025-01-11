const express = require('express');
const sendEmail = require('../controllers/emailController.js');

const router = express.Router();

router.post('/send', sendEmail);

module.exports = router;
