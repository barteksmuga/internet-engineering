import Action from '~/porto/Ship/Abstracts/Action';
import Ingredient from "../Models/Ingredient";
import NotFoundException from "../../../Ship/Exceptions/NotFoundException";

class UpdateIngredientByIdAction extends Action {
    /**
     * @param {UpdateIngredientByIdTransferObject} transferObject
     * @return {Promise<array>}
     * @private
     */
    __process (transferObject) {
        let params = Object.assign({}, transferObject.dataSet);
        delete params.id;
        return Ingredient.update(params, {
            where: {
                id: transferObject.get('id')
            }
        }).then(result => {
            if (result[0] === 0) {
                throw new NotFoundException();
            }
        });
    }
}

export default UpdateIngredientByIdAction;