import Sequelize from "~/helpers/Sequelize";
import Category from "~/porto/Containers/Category/Models/Category";

const Op = Sequelize.Op;

class GetCategoriesByIdsTask {
    run (ids) {
        return Category.findAll({
            where: {
                id: {
                    [Op.in]: ids
                }
            }
        })
    }
}

export default GetCategoriesByIdsTask