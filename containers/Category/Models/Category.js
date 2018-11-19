const seq = require('../../../helpers/Sequelize');

const Category = seq.define('categories', {
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
        asdAsd: {
            type: seq.Sequelize.STRING
        }
    }
);

Category.sync();

module.exports = Category;