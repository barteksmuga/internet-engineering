const seq = require('../../../../helpers/Sequelize');

const User = seq.define('users', {
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
        email: {
            allowNull: false,
            type: seq.Sequelize.STRING
        },
        password: {
            allowNull: false,
            type:seq.Sequelize.STRING
        }
    }
);

User.sync();

module.exports = User;