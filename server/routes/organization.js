'use strict';

const express = require('express');
var router = express.Router();

router.post('/group', function (req, res) {
    // 返回前端JSON
    res.json({
        code: 0,
        data: [{
            name: 'organizaiton',
            member: 20 
        }],
        msg: 'success'
    })
})
module.exports = router;