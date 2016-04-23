var express  = require('express'),
    app      = express(),
    nunjucks = require('nunjucks'),
    moment   = require('moment'),
    worldcup = require('./src/worldcup'),
    routes   = require('./src/routes')(app);

var env = nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

app.set('view engine', 'nj');
app.set('views', './templates');

app.use(express.static('ui/public'));

env.addFilter('date', function (str, format) {
    return moment(str).format(format);
});

app.listen(3000);
