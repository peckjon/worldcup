var db = require('../database');

exports.view = function(req, res){
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
            WHERE player.club_id = $club \
                  AND player.position_id = position.id \
                  AND player.club_id = club.id \
                  AND club.country_id = country.id \
            ORDER BY position_id;', {
        $club: req.params.id
    }).then(function(data){
        res.render('club.html', {
            club: data
        });
    });
}

exports.list = function(req, res){
    db.select('SELECT club.id, name, country.title as country FROM club, country WHERE country_id = country.id ORDER BY country').then(function(data){
        res.render('clubs.html', {
            clubs: data
        })
    });
}
