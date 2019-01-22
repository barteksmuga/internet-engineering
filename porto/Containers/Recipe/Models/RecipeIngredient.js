import seq from '~/helpers/Sequelize';
import Ingredient from "~/porto/Containers/Ingredient/Models/Ingredient";
import Recipe from "~/porto/Containers/Recipe/Models/Recipe";


const RecipeIngredient = seq.define('recipe_ingredients', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: seq.Sequelize.INTEGER,
    },
    recipeId: {
        allowNull: false,
        type: seq.Sequelize.INTEGER,
    },
    ingredientId: {
        allowNull: false,
        type: seq.Sequelize.INTEGER
    },
    quantity: {
        allowNull: false,
        type: seq.Sequelize.STRING
    }
});

Ingredient.belongsToMany(Recipe, {
    through: {
        model: RecipeIngredient,
        unique: false
    }
});
Recipe.belongsToMany(Ingredient, {
    through: {
        model: RecipeIngredient,
        unique: false
    }
});
RecipeIngredient.belongsTo(Ingredient);
Ingredient.hasMany(RecipeIngredient);
RecipeIngredient.belongsTo(Recipe);
Recipe.hasMany(RecipeIngredient);
RecipeIngredient.sync();

export default RecipeIngredient;