var rp = require('request-promise');

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

    return rp(obj);
}

module.exports = {
    getPrevMatches: getMatches,
    getTodayMatches: getMatches
}
