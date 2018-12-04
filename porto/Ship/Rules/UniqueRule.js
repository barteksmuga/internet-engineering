import Rule from "~/porto/Ship/Abstracts/Rule";
import sequelize from "~/helpers/Sequelize";
import ExistsException from '~/porto/Ship/Exceptions/ExistsException';

class UniqueRule extends Rule {

    constructor (tableName, columnName) {
        super();
        this.defaultException = ExistsException;
        this.tableName = tableName;
        this.columnName = columnName;
    }

    check (fieldName, requestParams) {
        let query = 'SELECT ' + this.columnName + ' FROM ' + this.tableName + " WHERE " + this.columnName + " = \'" + requestParams[fieldName] + "\';";
        return sequelize.query(query, {raw: true}).then((result) => {
            if (result.length === 0) {
                return Promise.resolve();
            }
            return Promise.reject();
        });

    }
}

export default UniqueRule;