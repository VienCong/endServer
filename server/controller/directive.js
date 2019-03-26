'use strict';

class Directive {
    constructor() {

    }

   async getStock(req, res,next) {
        res.json({
            code: 0,
            data: [{
                name: '天使',
                age: 18
            }],
            msg: 'success'
        })
    }
}

module.exports = new Directive;