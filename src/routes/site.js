var worldcup = require('../worldcup');

exports.index = function(req, res){
    var todayMatches = worldcup.getMatches('present');
    todayMatches.then(function (data) {
      res.render('index.html', {
          todayMatches: data
      });
    });
};
