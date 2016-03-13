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
    var todayMatches = worldcup.getTodayMatches('today');
    todayMatches.then(function (data) {
      res.render('index.html', {
          todayMatches: data
      });
    });
});

app.get('/previous', function (req, res){
    var prevMatches = worldcup.getPrevMatches('prev');
    prevMatches.then(function (data) {
      res.render('prev.html', {
          prevMatches: data
      });
    });
});

app.listen(3000, function(){
    console.log('Server running');
});
