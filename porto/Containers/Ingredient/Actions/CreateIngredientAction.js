import Action from '~/porto/Ship/Abstracts/Action';
import Ingredient from "../Models/Ingredient";

class CreateIngredientAction extends Action {
    /**
     * @param {CreateIngredientTransferObject} transferObject
     * @return {Promise<array>}
     * @private
     */
    __process (transferObject) {
        return Ingredient.create(transferObject.dataSet);
    }
}

export default CreateIngredientAction;