import Rule from "~/porto/Ship/Abstracts/Rule";
import sequelize from "~/helpers/Sequelize";
import ExistsException from '~/porto/Ship/Exceptions/ExistsException';

class UniqueRule extends Rule {

    constructor (tableName) {
        super();
        this.defaultException = ExistsException;
        this.tableName = tableName;
    }

    check (fieldName, params) {
        let query = 'SELECT ' + fieldName + ' FROM ' + this.tableName + " WHERE " + fieldName + " = \'" + params[fieldName] + "\';";
        let isUnique = false;
        sequelize.query(query, {raw: true}).then((result) => {
            if (result.length === 0) {
                isUnique = true;
            }
            return isUnique;
        });

    }
}

export default UniqueRule;