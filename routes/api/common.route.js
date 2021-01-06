const express = require('express');
const router = express.Router();

const mCommonController = require('../../controllers/common.controller');

router.get('/reniec/:dni', mCommonController.reniec);
router.get('/sunat/:ruc', mCommonController.sunat);

module.exports = router;
