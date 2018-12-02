import Action from '~/porto/Ship/Abstracts/Action';
import GetCategoryListTransferObject from '~/porto/Containers/Category/TransferObjects/GetCategoryListTransferObject';
import Category from '~/porto/Containers/Category/Models/Category';

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

export default GetCategoryListAction;