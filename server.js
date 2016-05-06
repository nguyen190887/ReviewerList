var express = require('express');
var app = express();
var path = require('path');

app.use('/app', express.static('app/')); 
app.use('/static/css', express.static('css/'));
app.use('/static/bootstrap', express.static('node_modules/bootstrap/dist/css/'));
app.use('/static/fonts', express.static('node_modules/bootstrap/dist/fonts/'));
app.use('/static/es6-shim', express.static('node_modules/es6-shim/'));
app.use('/static/systemjs', express.static('node_modules/systemjs/dist/'));
app.use('/static/angular2', express.static('node_modules/angular2/bundles/'));
app.use('/static/systemjs', express.static('node_modules/systemjs/dist/'));
app.use('/static/rxjs', express.static('node_modules/rxjs/bundles/'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

 
app.listen(3000);