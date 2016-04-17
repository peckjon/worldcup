module.exports = function (sequelize, Sequelize) {
    var country = sequelize.define('country', {
        code: {
            type: Sequelize.STRING,
            field: 'code'
        },
        name: {
            type: Sequelize.STRING,
            field: 'name'
        }
    }, {
        timestamps: false,
        classMethods: {
            associate: function (models) {
                country.hasMany(models.player, {
                    foreignKey: 'id',
                });
            }
        },
    });

    return country;
};
