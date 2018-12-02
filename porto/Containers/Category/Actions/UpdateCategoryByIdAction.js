import Action from '~/porto/Ship/Abstracts/Action';
import UpdateCategoryByIdTransferObject from '~/porto/Containers/Category/TransferObjects/UpdateCategoryByIdTransferObject';
import Category from '~/porto/Containers/Category/Models/Category';
import NotFoundException from '~/porto/Ship/Exceptions/NotFoundException';

class UpdateCategoryByIdAction extends Action {
    /**
     * @param {UpdateCategoryByIdTransferObject} transferObject
     * @return {Promise<Category>}
     * @private
     */
    __process (transferObject) {
        let params = Object.assign({}, transferObject.dataSet);
        delete params.id;
        return Category.update(params, {
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

export default UpdateCategoryByIdAction;