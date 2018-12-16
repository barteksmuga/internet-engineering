import Action from '~/porto/Ship/Abstracts/Action';
import Ingredient from "../Models/Ingredient";
import NotFoundException from "../../../Ship/Exceptions/NotFoundException";

class RemoveIngredientByIdAction extends Action {
    /**
     *
     * @return {Promise<void>}
     */
    async run () {
        const result = await Ingredient.destroy({
            where: {
                id: this.transferObject.get('id')
            }
        });
        if (result === 0) {
            throw new NotFoundException();
        }
    }
}

export default RemoveIngredientByIdAction;