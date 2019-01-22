import Action from '~/porto/Ship/Abstracts/Action';
import Recipe from "../Models/Recipe";
import NotFoundException from "../../../Ship/Exceptions/NotFoundException";

class RemoveRecipeByIdAction extends Action {
    /**
     * @return {Promise<array>}
     * @private
     */
    async run () {
        const result = await Recipe.destroy({
            where: {
                id: this.transferObject.get('id')
            }
        });
        if (result === 0) {
            throw new NotFoundException();
        }
    }
}

export default RemoveRecipeByIdAction;