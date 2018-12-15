import Action from '~/porto/Ship/Abstracts/Action';
import Ingredient from "../Models/Ingredient";
import NotFoundException from "../../../Ship/Exceptions/NotFoundException";

class UpdateIngredientByIdAction extends Action {
    /**
     *
     * @return {Promise<void>}
     */
    async run () {
        let params = Object.assign({}, this.transferObject.dataSet);
        delete params.id;
        const result = await Ingredient.update(params, {
            where: {
                id: this.transferObject.get('id')
            }
        });
        if (result[0] === 0) {
            throw new NotFoundException();
        }
    }
}

export default UpdateIngredientByIdAction;