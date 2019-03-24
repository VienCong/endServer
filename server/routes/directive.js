'use strict';

const express = require('express');
var router = express.Router();

router.post('/stock', function (req, res) {
    // 返回前端JSON
    res.json({
        code: 0,
        data: [{
            name: '天使',
            age: 18
        }],
        msg: 'success'
    })
})
module.exports = router;