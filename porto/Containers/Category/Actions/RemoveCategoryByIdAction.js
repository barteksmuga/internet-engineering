const Action = require('../../../Ship/Abstracts/Action');
const RemoveCategoryByIdTransferObject = require('../TransferObjects/RemoveCategoryByIdTransferObject');
const Category = require('../Models/Category');
const NotFoundException = require('../../../Ship/Exceptions/NotFoundException');

class RemoveCategoryByIdAction extends Action {
    /**
     * @param {RemoveCategoryByIdTransferObject} transferObject
     * @return {Promise<Category>}
     * @private
     */
    __process (transferObject) {
        return Category.destroy({
            where: {
                id: transferObject.get('id')
            }
        }).then(result => {
            if (result === 0) {
                throw new NotFoundException();
            }
        });
    }
}

module.exports = RemoveCategoryByIdAction;