var db = require('../database');

exports.view = function (req, res) {
    db.select('SELECT \
            player.fifa_display_name AS fifa_display_name, \
            player.first_name        AS first_name, \
            player.last_name         AS last_name, \
            player.number, \
            player.date_of_birth, \
            position.name            AS position_name, \
            position.key             AS position_key, \
            club.name                AS club_name, \
            country.title            AS club_country \
            FROM player, position, club, country \
            WHERE player.country_id = (SELECT id FROM country WHERE code = $code) \
                  AND player.position_id = position.id \
                  AND player.club_id = club.id \
                  AND club.country_id = country.id \
            ORDER BY position_id;', {
        $code: req.params.name
    }).then(function(data){
        res.render('teams/view.html', {
            team: data
        });
    });
};

exports.list = function(req, res){
    db.select('SELECT code, title FROM country WHERE country.id IN (SELECT country_id FROM player)').then(function(data){
        res.render('teams/list.html', {
            teams: data
        })
    });
}
