import Action from '~/porto/Ship/Abstracts/Action';
import Category from '~/porto/Containers/Category/Models/Category';
import NotFoundException from '~/porto/Ship/Exceptions/NotFoundException';

class RemoveCategoryByIdAction extends Action {
    /**
     *
     * @return {Promise<void>}
     */
    async run () {
        const result = await Category.destroy({
            where: {
                id: this.transferObject.get('id')
            }
        });
        if (result === 0) {
            throw new NotFoundException();
        }
    }
}

export default RemoveCategoryByIdAction;