'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'local';
const config = require(__dirname + '/../config/Database/database.json')[env];
const db = {};
import Porto from '~/porto/Ship/Porto';

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const files = [];
const sortDir = containerDir => {
    const folders = [];
    const CheckFile = filePath => (fs.statSync(filePath).isFile());
    const sortPath = dir => {
        dir = path.join(dir, 'Models');
        fs.readdirSync(dir)
            .filter(file => file.indexOf(".") !== 0)
            .forEach((res) => {
                const filePath = path.join(dir, res);
                if (CheckFile(filePath)) {
                    files.push(filePath);
                } else {
                    folders.push(filePath);
                }
            });
    };
    folders.push(containerDir);
    let i = 0;
    do {
        sortPath(folders[i]);
        i += 1;
    } while (i < folders.length);
};
Porto.getContainerDirectories().forEach(path => sortDir(path));
files.forEach((file) => {
    const model = sequelize.import(file);
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
