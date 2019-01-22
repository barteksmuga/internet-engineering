import Action from '~/porto/Ship/Abstracts/Action';
import Recipe from "../Models/Recipe";
import NotFoundException from "../../../Ship/Exceptions/NotFoundException";

class UpdateRecipeByIdAction extends Action {
    /**
     * @param {UpdateRecipeByIdTransferObject} transferObject
     * @return {Promise<array>}
     * @private
     */
    __process (transferObject) {
        let params = Object.assign({}, transferObject.dataSet);
        delete params.id;
        return Recipe.update(params, {
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

export default UpdateRecipeByIdAction;