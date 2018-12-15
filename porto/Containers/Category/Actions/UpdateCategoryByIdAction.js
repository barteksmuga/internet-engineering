import Action from '~/porto/Ship/Abstracts/Action';
import Category from '~/porto/Containers/Category/Models/Category';
import NotFoundException from '~/porto/Ship/Exceptions/NotFoundException';

class UpdateCategoryByIdAction extends Action {
    /**
     *
     * @return {Promise<void>}
     */
    async run () {
        let params = Object.assign({}, this.transferObject.dataSet);
        delete params.id;
        const result = await Category.update(params, {
            where: {
                id: this.transferObject.get('id')
            }
        });
        if (result[0] === 0) {
            throw new NotFoundException();
        }
    }
}

export default UpdateCategoryByIdAction;