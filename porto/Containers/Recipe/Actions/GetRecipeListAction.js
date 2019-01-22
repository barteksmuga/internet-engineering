import Action from '~/porto/Ship/Abstracts/Action';
import Recipe from "~/porto/Containers/Recipe/Models/Recipe";
import Sequelize from '~/helpers/Sequelize';
import Ingredient from "~/porto/Containers/Ingredient/Models/Ingredient";
import Category from "~/porto/Containers/Category/Models/Category";

class GetRecipeListAction extends Action {
    /**
     * @return {Promise<array>}
     * @private
     */
    async run () {
        const Op = Sequelize.Op;
        const where = {};
        const include = [];
        if (this.transferObject.dataSet.name) {
            where.name = {
                [Op.like]: '%' + this.transferObject.dataSet.name + '%'
            };
        }
        if (this.transferObject.dataSet.ingredients) {
            include.push({
                model: Ingredient,
                where: {
                    id: {
                        [Op.in]: this.transferObject.dataSet.ingredients
                    }
                }
            });
        }
        if (this.transferObject.dataSet.categories) {
            include.push({
                model: Category,
                where: {
                    id: {
                        [Op.in]: this.transferObject.dataSet.categories
                    }
                }
            });
        }
        return await Recipe.findAll({where, include});
    }
}

export default GetRecipeListAction;