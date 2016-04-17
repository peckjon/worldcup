var models    = require('../models'),
    Sequelize = require('sequelize');

exports.view = function (req, res) {
    models.club.findOne({
        include: [{
            model: models.player,
            where: {
                state: Sequelize.col('club.id')
            },
            include: [{
                model: models.position
            }]
        }, {
            model: models.country,
            where: {
                state: Sequelize.col('country.id')
            }
        }],
        where: {
            id: req.params.id,
        }
    }).then(function (data) {
        res.render('clubs/view.nj', {
            club: data,
        })
    });
}

exports.list = function (req, res) {
    models.club.findAll({
        include: [{
            model: models.country,
            where: {
                state: Sequelize.col('country.id')
            }
        }]
    }).then(function (data) {
        res.render('clubs/list.nj', {
            clubs: data
        });
    });
}
