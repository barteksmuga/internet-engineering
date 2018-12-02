import Action from '~/porto/Ship/Abstracts/Action';
import GetCategoryByIdTransferObject from '~/porto/Containers/Category/TransferObjects/GetCategoryByIdTransferObject';
import Category from '~/porto/Containers/Category/Models/Category';
import NotFoundException from '~/porto/Ship/Exceptions/NotFoundException';

class GetCategoryByIdAction extends Action {
    /**
     * @param {GetCategoryByIdTransferObject} transferObject
     * @return {Promise<Category>}
     * @private
     */
    __process (transferObject) {
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

export default GetCategoryByIdAction;