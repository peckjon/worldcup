var request = require('request');

function getMatches(arg, callback) {
    var obj = {
        json: true
    };

    switch (arg) {
        case 'today':
            obj.uri = 'http://worldcup.sfg.io/matches/today'
            break;
        case 'prev':
            obj.uri = 'http://worldcup.sfg.io/matches'
            break;
    }

    request(obj, function(error, response, body){
        if (response.statusCode === 200){
            callback(body);
        }
    });
}

module.exports = {
    getPrevMatches: getMatches,
    getTodayMatches: getMatches
}
