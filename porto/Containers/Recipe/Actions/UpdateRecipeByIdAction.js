import Action from '~/porto/Ship/Abstracts/Action';
import Recipe from "../Models/Recipe";
import NotFoundException from "../../../Ship/Exceptions/NotFoundException";
import RecipeIngredient from "~/porto/Containers/Recipe/Models/RecipeIngredient";
import Ingredient from "~/porto/Containers/Ingredient/Models/Ingredient";
import GetIngredientsByIdsTask from "~/porto/Containers/Ingredient/Tasks/GetIngredientsByIdsTask";
import GetCategoriesByIdsTask from "~/porto/Containers/Category/Tasks/GetCategoriesByIdsTask";

class UpdateRecipeByIdAction extends Action {
    /**
     * @return {Promise<array>}
     * @private
     */
    async run () {
        let params = Object.assign({}, this.transferObject.dataSet);
        delete params.id;
        const result = await Recipe.update(params, {
            where: {
                id: this.transferObject.get('id')
            }
        });
        if (result[0] === 0) {
            throw new NotFoundException();
        }
        const recipe = await Recipe.findOne({
            where: {
                id: this.transferObject.get('id')
            }
        });
        recipe.setIngredients([]);
        const ingredients = await (new GetIngredientsByIdsTask()).run(this.transferObject.dataSet.ingredients.map(item => item.id));
        ingredients.forEach(async ingredient => {
            let quantity = this.transferObject.dataSet.ingredients.find(item => item.id === ingredient.id).quantity;
            await recipe.addIngredient(ingredient, {through: {quantity}});
        });
        const categories = await (new GetCategoriesByIdsTask()).run(this.transferObject.dataSet.categories);
        recipe.setCategories(categories);
        return recipe;
    }
}

export default UpdateRecipeByIdAction;