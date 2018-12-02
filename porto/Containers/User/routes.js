import express from 'express';
import UserController from '~/porto/Containers/User/Controllers/UserController';
var router = express.Router();

/* GET users listing. */
router.get('/', UserController.getList);

module.exports = {
    prefix: '/users',
    router
};
