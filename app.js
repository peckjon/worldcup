var express     = require('express'),
    app         = express(),
    nunjucks    = require('nunjucks'),
    worldcup    = require('./src/worldcup.js'),
    moment      = require('moment');

var env = nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

app.set('view engine', 'nunjucks');
app.set('views', './templates');

env.addFilter('date', function(str, format){
    return moment(str).format(format);
});

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

app.get('/tomorrow', function(req, res){
    var tomorrowMatches = worldcup.getTomorrowMatches('tomorrow');
    tomorrowMatches.then(function (data){
        res.render('tomorrow.html', {
            tomorrowMatches: data
        })
    });
});

app.listen(3000);
