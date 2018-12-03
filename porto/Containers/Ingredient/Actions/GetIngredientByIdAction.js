import Action from '~/porto/Ship/Abstracts/Action';
import Ingredient from "../Models/Ingredient";
import NotFoundException from "../../../Ship/Exceptions/NotFoundException";

class GetIngredientByIdAction extends Action {
    /**
     * @param {GetIngredientByIdAction} transferObject
     * @return {Promise<array>}
     * @private
     */
    __process (transferObject) {
        return Ingredient.findOne({
            where: transferObject.dataSet
        }).then(model => {
            if (model) {
                return model;
            }
            throw new NotFoundException();
        });
    }
}

export default GetIngredientByIdAction;