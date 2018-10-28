var mysql = require('mysql');
var dbConfig = require('../db');
var db = mysql.createConnection(dbConfig);

db.connect();
module.exports = db;
