var worldcup = require('../worldcup'),
    util     = require('../util'),
    limit    = 9;

exports.past = function (req, res) {
    var pastMatches = worldcup.getMatches('past');
    pastMatches.then(function (data) {
        var page = req.query.page,
            url  = req.url;

        if (page === undefined) {
            page = 1;
        }

        res.render('matches/past.nj', {
            pastMatches : util.paginate(data, limit, page),
            firstPage   : req.path,
            page        : page,
            pages       : Math.floor(data.length / limit),
            previousPage: url.replace(/\d/, page - 1),
            nextPage    : url.replace(/\d/, page + 1),
            goToPage    : url.replace(/\d/, '')
        });
    });
};

exports.future = function (req, res) {
    var futureMatches = worldcup.getMatches('future');
    futureMatches.then(function (data) {
        var page = req.query.page;

        if (page == null) {
            page = 1;
        }

        res.render('matches/future.nj', {
            futureMatches: util.paginate(data, limit, page),
            firstPage    : req.path
        })
    });
};
