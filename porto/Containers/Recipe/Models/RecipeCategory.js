import seq from '~/helpers/Sequelize';
import Category from "~/porto/Containers/Category/Models/Category";
import Recipe from "~/porto/Containers/Recipe/Models/Recipe";


const RecipeCategory = seq.define('recipe_categories', {
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
    categoryId: {
        allowNull: false,
        type: seq.Sequelize.INTEGER
    }
});

Category.belongsToMany(Recipe, {
    through: {
        model: RecipeCategory,
        unique: false
    }
});
Recipe.belongsToMany(Category, {
    through: {
        model: RecipeCategory,
        unique: false
    }
});
RecipeCategory.belongsTo(Category);
Category.hasMany(RecipeCategory);
RecipeCategory.belongsTo(Recipe);
Recipe.hasMany(RecipeCategory);
RecipeCategory.sync();

export default RecipeCategory;