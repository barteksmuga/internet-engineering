import Action from '~/porto/Ship/Abstracts/Action';
import Ingredient from "../Models/Ingredient";

class GetIngredientByIdAction extends Action {
    /**
     * @param {GetIngredientByIdAction} transferObject
     * @return {Promise<array>}
     * @private
     */
    __process (transferObject) {
        return Ingredient.findOne({
            where: transferObject.dataSet
        });
    }
}

export default GetIngredientByIdAction;