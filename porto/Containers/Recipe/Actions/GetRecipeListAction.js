import Action from '~/porto/Ship/Abstracts/Action';
import Recipe from "../Models/Recipe";

class GetRecipeListAction extends Action {
    /**
     * @param {GetRecipeListAction} transferObject
     * @return {Promise<array>}
     * @private
     */
    __process (transferObject) {
        return Recipe.findAll({
            where: this.transferObject.dataSet
        });
    }
}

export default GetRecipeListAction;