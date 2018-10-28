var express = require('express');
var IngredientController = require('./Controllers/IngredientController');
var router = express.Router();

/* GET users listing. */
router.get('/', IngredientController.getList);
router.get('/:id', IngredientController.get);
router.post('/', IngredientController.create);
router.put('/:id', IngredientController.update);
router.delete('/:id', IngredientController.remove);

module.exports = router;
