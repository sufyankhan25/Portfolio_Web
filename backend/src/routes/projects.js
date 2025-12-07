
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/project.controller');
const auth = require('../middleware/auth');

router.get('/', ctrl.list);
router.get('/:id', ctrl.get);
router.post('/', auth, ctrl.create); // protected
router.put('/:id', auth, ctrl.update); // protected
router.delete('/:id', auth, ctrl.remove); // protected

module.exports = router;
