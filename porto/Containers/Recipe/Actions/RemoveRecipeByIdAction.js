import Action from '~/porto/Ship/Abstracts/Action';
import Recipe from "../Models/Recipe";
import NotFoundException from "../../../Ship/Exceptions/NotFoundException";

class RemoveRecipeByIdAction extends Action {
    /**
     * @param {RemoveRecipeByIdTransferObject} transferObject
     * @return {Promise<array>}
     * @private
     */
    __process (transferObject) {
        return Recipe.destroy({
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

export default RemoveRecipeByIdAction;