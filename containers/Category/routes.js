const express = require('express');
const CategoryController = require('./Controllers/CategoryController');
const router = express.Router();

router.get('/', CategoryController.getList);
router.get('/:id', CategoryController.get);
router.post('/', CategoryController.create);
router.put('/:id', CategoryController.update);
router.delete('/:id', CategoryController.remove);

module.exports = router;
