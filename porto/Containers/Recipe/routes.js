var express = require('express');
var RecipeController = require('./_Controllers/RecipeController');
var router = express.Router();

router.get('/', RecipeController.getList);
router.get('/:id', RecipeController.get);
router.post('/', RecipeController.create);
router.put('/:id', RecipeController.update);
router.delete('/:id', RecipeController.remove);

module.exports = {
    prefix: '/recipes',
    router
};
