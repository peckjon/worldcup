module.exports = function (sequelize, Sequelize) {
    var player = sequelize.define('player', {
        fifaDisplayName: {
            type: Sequelize.STRING,
        },
        firstName: {
            type: Sequelize.STRING,
        },
        lastName: {
            type: Sequelize.STRING,
        },
        shirtName: {
            type: Sequelize.STRING,
        },
        dateOfBirth: {
            type: Sequelize.STRING,
        },
        number: {
            type: Sequelize.INTEGER,
        },
        height: {
            type: Sequelize.INTEGER,
        }
    }, {
        classMethods: {
            associate: function (models) {
                player.belongsTo(models.country, {
                    foreignKey: 'countryId',
                });
                player.belongsTo(models.club, {
                    foreignKey: 'clubId',
                });
                player.belongsTo(models.position, {
                    foreignKey: 'positionId',
                });
            }
        },
        timestamps: false,
    });

    return player;
};