var userRouter = require('./User/routes');
var ingredientRouter = require('./Ingredient/routes');

module.exports = {
    '/users': userRouter,
    '/ingredients': ingredientRouter,
};