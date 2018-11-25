const Action = require('../../../Ship/Abstracts/Action');
const UpdateCategoryByIdTransferObject = require('../TransferObjects/UpdateCategoryByIdTransferObject');
const Category = require('../Models/Category');
const NotFoundException = require('../../../Ship/Exceptions/NotFoundException');

class UpdateCategoryByIdAction extends Action {
    /**
     * @param {UpdateCategoryByIdTransferObject} transferObject
     * @return {Promise<Category>}
     * @private
     */
    __process (transferObject) {
        let params = Object.assign({}, transferObject.dataSet);
        delete(params.id);
        Category.update(params, {
            where: {
                id: transferObject.get('id')
            }
        }).then(result => {
            if (result[0] === 0) {
                throw new NotFoundException();
            }
        });
    }
}

module.exports = UpdateCategoryByIdAction;