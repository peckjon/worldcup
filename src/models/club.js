module.exports = function(sequelize, Sequelize) {
    var club = sequelize.define('club', {
        name: {
            type: Sequelize.STRING
        }
    }, {
        classMethods: {
            associate: function(models){
                club.belongsTo(models.country, {
                    foreignKey: 'countryId'
                });
                club.hasMany(models.player);
            }
        },
        timestamps: false,
    });

    return club;
};