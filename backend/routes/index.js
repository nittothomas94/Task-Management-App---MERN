const express = require('express');

const taskRoute = require('./task-routes');

const router = express.Router();

router.use('/task', taskRoute);

module.exports = router;
