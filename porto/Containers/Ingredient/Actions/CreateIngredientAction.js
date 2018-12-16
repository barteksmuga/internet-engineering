import Action from '~/porto/Ship/Abstracts/Action';
import Ingredient from "../Models/Ingredient";

class CreateIngredientAction extends Action {
    /**
     *
     * @return {Promise<void>}
     */
    async run () {
        return await Ingredient.create(this.transferObject.dataSet);
    }
}

export default CreateIngredientAction;