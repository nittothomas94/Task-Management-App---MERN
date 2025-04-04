const express = require('express');

const {
  getTasks,
  getTaskById,
  createTask,
  deleteTaskById,
  updateTaskById,
} = require('../controllers/task-controllers');

const router = express.Router();

router.get('/', getTasks);

router.get('/:id', getTaskById);

router.post('/', createTask);

router.delete('/:id', deleteTaskById);

router.patch('/:id', updateTaskById);

module.exports = router;
