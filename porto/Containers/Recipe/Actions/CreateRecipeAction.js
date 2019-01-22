import Action from '~/porto/Ship/Abstracts/Action';
import Recipe from "../Models/Recipe";

class CreateRecipeAction extends Action {
    /**
     * @param {CreateRecipeTransferObject} transferObject
     * @return {Promise<array>}
     * @private
     */
    __process (transferObject) {
        return Recipe.create(transferObject.dataSet);
    }
}

export default CreateRecipeAction;