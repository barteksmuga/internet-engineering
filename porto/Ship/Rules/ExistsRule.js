import Rule from "~/porto/Ship/Abstracts/Rule";
import NotFoundException from "~/porto/Ship/Exceptions/NotFoundException";
import Sequelize from "~/helpers/Sequelize";

class ExistsRule extends Rule {
    constructor (tableName, columnName) {
        super();
        this.defaultException = NotFoundException;
        this.tableName = tableName;
        this.columnName = columnName;
    }

    check (fieldName, requestParams) {
        let query = 'SELECT ' + this.columnName + ' FROM ' + this.tableName + " WHERE " + this.columnName + " = \'" + requestParams[fieldName] + "\';";
        return Sequelize.query(query, {type: Sequelize.QueryTypes.SELECT}).then((result) => {
            if (result.length === 0) {
                return Promise.reject();
            }
            return Promise.resolve();
        })
    }
}

export default ExistsRule;