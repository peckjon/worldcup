var site = require('./site.js'),
    matches = require('./matches.js'),
    teams = require('./teams.js');

module.exports = function(app){

    app.get('/', site.index);

    app.get('/previous', matches.previous);

    app.get('/tomorrow', matches.tomorrow);

    app.all('/team/:name/:op?', teams.load);
    app.get('/team/:name', teams.view);

}
