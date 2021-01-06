'use strict'
const express = require('express');
const router = express.Router();

router.get('/', index);
router.get('/ping', ping);

/* GET home page. */
function index(req, res, next) {
    res.send('is running');
}

/* GET ping page. */
function ping(req, res) {
    res.send('pong');
}


module.exports = router;
