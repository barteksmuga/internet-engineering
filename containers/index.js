const userRouter = require('./User/routes');
const ingredientRouter = require('./Ingredient/routes');
const categoryRouter = require('./Category/routes');
const recipeRouter = require('./Recipe/routes');

module.exports = {
    '/users': userRouter,
    '/ingredients': ingredientRouter,
    '/categories': categoryRouter,
    '/recipes': recipeRouter
};