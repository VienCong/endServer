var directive = require('./directive');

module.exports = app => {
    app.use('/directive', directive);
}