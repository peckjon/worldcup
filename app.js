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
    worldcup.getPrevMatches('today', function(todayMatches) {
        res.render('index.html', {
            todayMatches: todayMatches
        });
    });
});

app.get('/previous', function (req, res){
    worldcup.getPrevMatches('prev', function(prevMatches) {
        res.render('prev.html', {
            prevMatches: prevMatches
        });
    });
});

app.listen(3000, function(){
    console.log('Server running');
});
