import Action from '~/porto/Ship/Abstracts/Action';
import Category from '~/porto/Containers/Category/Models/Category';

class CreateCategoryAction extends Action {
    /**
     *
     * @return {Promise<void>}
     */
    async run () {
        return await Category.create(this.transferObject.dataSet);
    }
}

export default CreateCategoryAction;