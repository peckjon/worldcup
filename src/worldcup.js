var rp = require('request-promise');

module.exports = {
    getTodayMatches: function(){
        rp('http://worldcup.sfg.io/matches/today').then(this.process);
    },
    process: function(data){
        return JSON.parse(data);
    }
}
