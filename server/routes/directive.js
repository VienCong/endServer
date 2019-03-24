'use strict';

const express = require('express');
var router = express.Router();

router.post('/stock', function (req, res) {
    // 返回前端Json
    res.json({
        code: 0,
        data: [{
            name: '天使',
            age: 18,
            sexy: 'girl'
        }],
        msg: 'success'
    })
})
module.exports = router;