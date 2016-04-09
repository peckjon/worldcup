var worldcup = require('../worldcup');

exports.index = function(req, res){
    var todayMatches = worldcup.getTodayMatches('today');
    todayMatches.then(function (data) {
      res.render('index.html', {
          todayMatches: data
      });
    });
};
