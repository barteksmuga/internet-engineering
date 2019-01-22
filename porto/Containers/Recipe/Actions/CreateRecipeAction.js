import Action from '~/porto/Ship/Abstracts/Action';
import Recipe from "../Models/Recipe";
import GetIngredientByIdAction from "~/porto/Containers/Ingredient/Actions/GetIngredientByIdAction";
import GetIngredientsByIdsTask from "~/porto/Containers/Ingredient/Tasks/GetIngredientsByIdsTask";
import GetCategoriesByIdsTask from "~/porto/Containers/Category/Tasks/GetCategoriesByIdsTask";

class CreateRecipeAction extends Action {
    /**
     * @return {Promise<array>}
     * @private
     */
    async run () {
        const recipeData = {
            name: this.transferObject.dataSet.name,
            authorId: this.transferObject.dataSet.authorId,
            preparingMethod: this.transferObject.dataSet.preparingMethod,
        };
        const recipe = await Recipe.create(recipeData);
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

export default CreateRecipeAction;