import Rule from "~/porto/Ship/Abstracts/Rule";
import Sequelize from "~/helpers/Sequelize";
import ResourceAlreadyExistsException from '~/porto/Ship/Exceptions/ResourceAlreadyExistsException';

class UniqueRule extends Rule {
    constructor (tableName, columnName) {
        super();
        this.defaultException = ResourceAlreadyExistsException;
        this.tableName = tableName;
        this.columnName = columnName;
    }

    async check (fieldName, requestParams) {
        let query = 'SELECT ' + this.columnName + ' FROM ' + this.tableName + " WHERE " + this.columnName + " = \'" + requestParams[fieldName] + "\';";
        const result = await Sequelize.query(query, {raw: true});
        return result === 0;
    }
}

export default UniqueRule;