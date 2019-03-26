var directive = require('./directive');
var organization = require('./organization');

module.exports = app => {
    app.use('/directive', directive);
    app.use('/organization', organization);
}