import Action from '~/porto/Ship/Abstracts/Action';
import Recipe from "../Models/Recipe";
import NotFoundException from "~/porto/Ship/Exceptions/NotFoundException";
import Ingredient from "~/porto/Containers/Ingredient/Models/Ingredient";
import RecipeIngredient from "~/porto/Containers/Recipe/Models/RecipeIngredient";
import Category from "~/porto/Containers/Category/Models/Category";

class GetRecipeByIdAction extends Action {
    /**
     * @return {Promise<array>}
     */
    async run () {
        const recipe = await Recipe.findOne({
            where: this.transferObject.dataSet,
            include: [
                {
                    model: RecipeIngredient,
                    include: [Ingredient]
                },
                Category
            ]
        });
        if (recipe) {
            return recipe;
        }
        throw new NotFoundException();
    }
}

export default GetRecipeByIdAction;