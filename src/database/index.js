var sqlite3 = require('q-sqlite3'),
    db = null;

sqlite3.createDatabase(__dirname + '/../../data/worldcup.db').done(function(database) {
    db = database;
});

exports.select = function (query, params) {
    if(typeof params === 'object'){
        return db.all(query, params);
    }

    return db.all(query);
}
