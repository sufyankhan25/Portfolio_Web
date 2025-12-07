
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/uploads.controller');
const auth = require('../middleware/auth');

// Protected presign endpoint
router.get('/presign', auth, ctrl.getPresign);

module.exports = router;
