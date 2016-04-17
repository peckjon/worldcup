var site = require('./site.js'),
    matches = require('./matches.js'),
    teams = require('./teams.js'),
    clubs = require('./clubs.js');

module.exports = function(app){

    app.get('/', site.index);

    app.get('/previous', matches.past);

    app.get('/tomorrow', matches.future);

    app.get('/team/list', teams.list);
    app.get('/team/:name', teams.view);

    app.get('/club/list', clubs.list);
    app.get('/club/view/:id', clubs.view);

}
