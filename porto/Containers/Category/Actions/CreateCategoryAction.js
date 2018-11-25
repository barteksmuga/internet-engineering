const Action = require('../../../Ship/Abstracts/Action');
const CreateCategoryTransferObject = require('../TransferObjects/CreateCategoryTransferObject');
const Category = require('../Models/Category');

class CreateCategoryAction extends Action {
    /**
     * @param {CreateCategoryTransferObject} transferObject
     * @return {Promise<Category>}
     */
    __proceed (transferObject) {
        return Category.create(transferObject.dataSet);
    }
}

module.exports = CreateCategoryAction;