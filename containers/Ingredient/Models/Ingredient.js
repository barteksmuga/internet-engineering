const seq = require('../../../helpers/Sequelize');

const Ingredient = seq.define('ingredients', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: seq.Sequelize.INTEGER,
        },
        name: {
            allowNull: false,
            type: seq.Sequelize.STRING
        },
    }
);

Ingredient.sync();

module.exports = Ingredient;