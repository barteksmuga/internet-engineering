const config = require('./database');
const db = config[config.defaultEnv];
const {Op} = require('sequelize');

module.exports = Object.assign({}, db, {
    operatorsAliases: Op,
    define: {
        timestamps: true,
        createdAt: 'dateCreated',
        updatedAt: 'dateUpdated',
    },
});