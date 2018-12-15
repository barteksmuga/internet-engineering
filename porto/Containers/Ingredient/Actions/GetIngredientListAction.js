import Action from '~/porto/Ship/Abstracts/Action';
import Ingredient from "../Models/Ingredient";

class GetIngredientListAction extends Action {
    /**
     *
     * @return {Promise<Array<Model>>}
     */
    async run () {
        return await Ingredient.findAll({
            where: this.transferObject.dataSet
        });
    }
}

export default GetIngredientListAction;