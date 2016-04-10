var db = require('../database'),
    util = require('util');

exports.load = function(req, res, next){
    if (req.params.name) {
      next();
    } else {
      var err = new Error('cannot find team ' + req.params.name);
      err.status = 404;
      next(err);
    }
};

exports.view = function (req, res) {
    db.select('\
        SELECT player.name as player_name, player.number, player.captain, player.date_of_birth, position.name as position_name, position.key as position_key \
        FROM player, position WHERE country_id = (SELECT id FROM country WHERE code = $code) AND position.id = player.position_id;', {
        $code: req.params.name
    }).then(function(data){
        res.render('team.html', {
            team: data
        });
    });
};
