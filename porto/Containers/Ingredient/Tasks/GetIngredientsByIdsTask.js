import Ingredient from "~/porto/Containers/Ingredient/Models/Ingredient";
import Sequelize from "~/helpers/Sequelize";

const Op = Sequelize.Op;

class GetIngredientsByIdsTask {
    run (ids) {
        return Ingredient.findAll({
            where: {
                id: {
                    [Op.in]: ids
                }
            }
        })
    }
}

export default GetIngredientsByIdsTask