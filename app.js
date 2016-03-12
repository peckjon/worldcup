var express = require('express'),
    app = express(),
    nunjucks = require('nunjucks'),
    worldcup = require('./src/worldcup.js');

nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

app.set('view engine', 'nunjucks');
app.set('views', './templates');

app.get('/', function (req, res) {
    var todayMatches = worldcup.getTodayMatches();

    res.render('index.html', {
        todayMatches: todayMatches
    })
});

app.listen(3000, function(){
    console.log('Server running');
});
