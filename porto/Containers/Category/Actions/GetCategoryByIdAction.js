const Action = require('../../../Ship/Abstracts/Action');
const GetCategoryByIdTransferObject = require('../TransferObjects/GetCategoryByIdTransferObject');
const Category = require('../Models/Category');
const NotFoundException = require('../../../Ship/Exceptions/NotFoundException');

class GetCategoryByIdAction extends Action {
    /**
     * @param {GetCategoryByIdTransferObject} transferObject
     * @return {Promise<Category>}
     */
    __proceed (transferObject) {
        return Category.findOne({
            where: transferObject.dataSet
        }).then(model => {
            if (model) {
                return model;
            }
            throw new NotFoundException();
        });
    }
}

module.exports = GetCategoryByIdAction;