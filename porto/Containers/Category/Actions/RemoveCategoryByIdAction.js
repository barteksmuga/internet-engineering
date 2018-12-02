import Action from '~/porto/Ship/Abstracts/Action';
import RemoveCategoryByIdTransferObject from '~/porto/Containers/Category/TransferObjects/RemoveCategoryByIdTransferObject';
import Category from '~/porto/Containers/Category/Models/Category';
import NotFoundException from '~/porto/Ship/Exceptions/NotFoundException';

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

export default RemoveCategoryByIdAction;