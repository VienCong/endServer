'use strict';

const express = require('express');
var router = express.Router();

const Directive = require('../controller/directive');

router.post('/stock', Directive.getStock);

module.exports = router;