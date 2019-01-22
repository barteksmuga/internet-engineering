import Action from '~/porto/Ship/Abstracts/Action';
import Recipe from "../Models/Recipe";
import NotFoundException from "../../../Ship/Exceptions/NotFoundException";

class GetRecipeByIdAction extends Action {
    /**
     * @param {GetRecipeByIdAction} transferObject
     * @return {Promise<array>}
     * @private
     */
    __process (transferObject) {
        return Recipe.findOne({
            where: transferObject.dataSet
        }).then(model => {
            if (model) {
                return model;
            }
            throw new NotFoundException();
        });
    }
}

export default GetRecipeByIdAction;