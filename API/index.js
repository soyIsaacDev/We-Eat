const express = require('express');
/* const nunjucks = require('nunjucks'); */
const { index } = require('./src/routes/index');
const app = express();

/* const env = nunjucks.configure('views', {noCache: true}); */

app.set('view engine', 'html');
/* app.engine('html', nunjucks.render); */

app.use(express.static('./public'));

app.use(express.urlencoded({extended: false}));
app.use(express.json({extended: false}));
app.use('/', index);
app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});


module.exports = app;
