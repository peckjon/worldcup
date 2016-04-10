var worldcup = require('../worldcup');

exports.previous = function (req, res) {
    var prevMatches = worldcup.getPrevMatches('prev');
    prevMatches.then(function (data) {
      res.render('prev.html', {
          prevMatches: data
      });
    });
}

exports.tomorrow = function (req, res) {
    var tomorrowMatches = worldcup.getTomorrowMatches('tomorrow');
    tomorrowMatches.then(function (data){
        res.render('tomorrow.html', {
            tomorrowMatches: data
        })
    });
}
