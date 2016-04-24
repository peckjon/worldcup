var worldcup = require('../worldcup');

exports.past = function (req, res) {
    var pastMatches = worldcup.getMatches('past');
    pastMatches.then(function (data) {
        res.render('matches/past.nj', {
            pastMatches: data
        });
    });
}

exports.future = function (req, res) {
    var futureMatches = worldcup.getMatches('future');
    futureMatches.then(function (data) {
        res.render('matches/future.nj', {
            futureMatches: data
        })
    });
}
