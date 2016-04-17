var models = require('../models'),
    Sequelize = require('sequelize');

exports.view = function (req, res) {
    models.country.findOne({
        include: [{
            model: models.player,
            where: {
                state: Sequelize.col('country.id')
            },
            include: [{
                model: models.position
            }, {
                model: models.club,
                include: [{
                    model: models.country
                }]
            }]
        }],
        where: {
            code: req.params.name,
        }
    }).then(function(data){
        res.render('teams/view.nj', {
            team: data,
        })
    });
};

exports.list = function(req, res){
    models.country.findAll().then(function(data){
        res.render('teams/list.nj', {
            teams: data
        });
    });
}
