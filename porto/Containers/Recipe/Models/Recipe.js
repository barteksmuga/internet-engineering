const seq = require('../../../../helpers/Sequelize');

const Recipe = seq.define('recipes', {
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
        authorId: {
            allowNull: false,
            type: seq.Sequelize.INTEGER
        },
        preparingMethod: {
            allowNull: false,
            type: seq.Sequelize.STRING
        }
    }
);

Recipe.sync();

module.exports = Recipe;