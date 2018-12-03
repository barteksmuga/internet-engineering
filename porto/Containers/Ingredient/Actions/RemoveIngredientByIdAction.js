import Action from '~/porto/Ship/Abstracts/Action';
import Ingredient from "../Models/Ingredient";
import NotFoundException from "../../../Ship/Exceptions/NotFoundException";

class RemoveIngredientByIdAction extends Action {
    /**
     * @param {RemoveIngredientByIdTransferObject} transferObject
     * @return {Promise<array>}
     * @private
     */
    __process (transferObject) {
        return Ingredient.destroy({
            where: {
                id: transferObject.get('id')
            }
        }).then(result => {
            if (result === 0) {
                throw new NotFoundException();
            }
        });
    }
}

export default RemoveIngredientByIdAction;