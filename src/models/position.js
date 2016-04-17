module.exports = function(sequelize, Sequelize) {
    var position = sequelize.define('position', {
        key: {
            type: Sequelize.STRING,
            field: 'key'
        },
        name: {
            type: Sequelize.STRING,
            field: 'name'
        }
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models){
                position.hasMany(models.player, {
                    foreignKey: 'id',
                });
            }
        },
    });

    return position;
};
