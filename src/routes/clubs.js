var models    = require('../models'),
    Sequelize = require('sequelize');

exports.view = function (req, res) {
    models.club.findOne({
        include: [{
            model: models.player,
            where: {
                countryId: Sequelize.col('club.id')
            },
            include: [{
                model: models.position
            }]
        }, {
            model: models.country,
            where: {
                countryId: Sequelize.col('country.id')
            }
        }],
        where: {
            id: req.params.id,
        },
        order: [
            [models.player, models.position, 'id', 'ASC']
        ]
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
                id: Sequelize.col('country.id')
            }
        }],
        order: [
            [models.country, 'name', 'ASC']
        ]
    }).then(function (data) {
        res.render('clubs/list.nj', {
            clubs: data
        });
    });
}
