import Action from '~/porto/Ship/Abstracts/Action';
import Category from '~/porto/Containers/Category/Models/Category';
import NotFoundException from '~/porto/Ship/Exceptions/NotFoundException';

class GetCategoryByIdAction extends Action {
    /**
     *
     * @return {Promise<Model>}
     */
    async run () {
        const category = await Category.findOne({
            where: this.transferObject.dataSet
        });
        if (category) {
            return category;
        }
        throw new NotFoundException();
    }
}

export default GetCategoryByIdAction;