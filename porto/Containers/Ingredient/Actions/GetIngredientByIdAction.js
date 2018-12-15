import Action from '~/porto/Ship/Abstracts/Action';
import Ingredient from "~/porto/Containers/Ingredient/Models/Ingredient";
import NotFoundException from "~/porto/Ship/Exceptions/NotFoundException";

class GetIngredientByIdAction extends Action {
    /**
     *
     * @return {Promise<Model>}
     */
    async run () {
        const ingredient = await Ingredient.findOne({
            where: this.transferObject.dataSet
        });
        if (ingredient) {
            return ingredient;
        }
        throw new NotFoundException();
    }
}

export default GetIngredientByIdAction;