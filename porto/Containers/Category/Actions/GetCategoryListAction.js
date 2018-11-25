const Action = require('../../../Ship/Abstracts/Action');
const GetCategoryListTransferObject = require('../TransferObjects/GetCategoryListTransferObject');
const Category = require('../Models/Category');

class GetCategoryListAction extends Action {
    /**
     * @param {GetCategoryListTransferObject} transferObject
     * @return {Promise<array>}
     * @private
     */
    __process (transferObject) {
        return Category.findAll({
            where: transferObject.dataSet
        });
    }
}

module.exports = GetCategoryListAction;