'use strict'
const express = require('express');
const router = express.Router();

const common = require('./common.route');

router.use('/common', common);

module.exports = router;

