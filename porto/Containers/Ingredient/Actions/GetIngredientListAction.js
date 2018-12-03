import Action from '~/porto/Ship/Abstracts/Action';
import Ingredient from "../Models/Ingredient";

class GetIngredientListAction extends Action {
    /**
     * @param {GetIngredientListAction} transferObject
     * @return {Promise<array>}
     * @private
     */
    __process (transferObject) {
        return Ingredient.findAll({
            where: transferObject.dataSet
        });
    }
}

export default GetIngredientListAction;