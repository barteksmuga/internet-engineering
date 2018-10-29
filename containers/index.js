var userRouter = require('./User/routes');
var ingredientRouter = require('./Ingredient/routes');
var recipeRouter = require('./Recipe/routes');

module.exports = {
    '/users': userRouter,
    '/ingredients': ingredientRouter,
    '/recipes': recipeRouter
};