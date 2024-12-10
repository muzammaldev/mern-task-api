const express = require('express');
const { create, findAll, findOne, put, patch, deleteById } = require('../controllers/task.controller');
const { authenticateToken } = require('../middlewares/auth.middleware');
const paginate = require('../utils/paginate');
const Task = require('../models/task.model');

const router = express.Router();

router.post('/create', authenticateToken, create)
router.get('/', authenticateToken, paginate(Task), findAll)
router.get('/:id', authenticateToken, findOne)
router.put('/:id', authenticateToken, put)
router.patch('/:id', authenticateToken, patch)
router.delete('/:id', authenticateToken, deleteById)

module.exports = router