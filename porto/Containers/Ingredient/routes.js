var express = require('express');
var IngredientController = require('./_Controllers/IngredientController');
var router = express.Router();

router.get('/', IngredientController.getList);
router.get('/:id', IngredientController.get);
router.post('/', IngredientController.create);
router.put('/:id', IngredientController.update);
router.delete('/:id', IngredientController.remove);

module.exports = {
    prefix: '/ingredients',
    router
};
