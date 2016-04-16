var worldcup = require('../worldcup');

exports.past = function (req, res) {
    var pastMatches = worldcup.getMatches('past');
    pastMatches.then(function (data) {
      res.render('matches/past.html', {
          pastMatches: data
      });
    });
}

exports.future = function (req, res) {
    var futureMatches = worldcup.getMatches('future');
    futureMatches.then(function (data){
        res.render('matches/future.html', {
            futureMatches: data
        })
    });
}
