var express = require('express');
var UserController = require('./Controllers/UserController');
var router = express.Router();

/* GET users listing. */
router.get('/', UserController.getList);

module.exports = {
    prefix: '/users',
    router
};
