import Action from '~/porto/Ship/Abstracts/Action';
import CreateCategoryTransferObject from '~/porto/Containers/Category/TransferObjects/CreateCategoryTransferObject';
import Category from '~/porto/Containers/Category/Models/Category';

class CreateCategoryAction extends Action {
    /**
     * @param {CreateCategoryTransferObject} transferObject
     * @return {Promise<Category>}
     * @private
     */
    __process (transferObject) {
        return Category.create(transferObject.dataSet);
    }
}

export default CreateCategoryAction;