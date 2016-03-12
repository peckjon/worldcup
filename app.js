var express = require('express'),
    app = express(),
    nunjucks = require('nunjucks');

nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

app.set('view engine', 'nunjucks');
app.set('views', './templates');

app.get('/', function (req, res) {
    res.render('index.html');
});

app.listen(3000, function(){
    console.log('Server running');
});
