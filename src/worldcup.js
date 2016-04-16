var rp = require('request-promise');

function getMatches(arg, callback) {
    var obj = {
        json: true
    };

    switch (arg) {
        case 'present':
            obj.uri = 'http://worldcup.sfg.io/matches/today'
            break;
        case 'past':
            obj.uri = 'http://worldcup.sfg.io/matches'
            break;
        case 'future':
            obj.uri = 'http://worldcup.sfg.io/matches/tomorrow'
            break;
    }

    return rp(obj);
}

module.exports = {
    getMatches: getMatches
}
