import Rule from "~/porto/Ship/Abstracts/Rule";
import NotFoundException from "~/porto/Ship/Exceptions/NotFoundException";
import sequelize from "~/helpers/Sequelize";

class ExistsRule extends Rule {

    constructor (tableName) {
        super();
        this.defaultException = NotFoundException;
        this.tableName = tableName;
    }

    check (fieldName, params) {
        let query = 'SELECT ' + fieldName + ' FROM ' + this.tableName + " WHERE " + fieldName + " = \'" + params[fieldName] + "\';";
        return sequelize.query(query, {raw: true}).spread((result) => {
            if (result.length === 0) {
                return false;
            }
            return true;
        })
    }
}

export default ExistsRule;