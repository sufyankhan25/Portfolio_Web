
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/contact.controller');

router.post('/', ctrl.sendMessage);

module.exports = router;
