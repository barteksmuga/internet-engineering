import Action from '~/porto/Ship/Abstracts/Action';
import Category from '~/porto/Containers/Category/Models/Category';

class GetCategoryListAction extends Action {
    /**
     *
     * @return {Promise<Array<Model>>}
     */
    async run () {
        return await Category.findAll({
            where: this.transferObject.dataSet
        });
    }
}

export default GetCategoryListAction;