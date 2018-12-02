import Sequelize from 'sequelize';
import config from '~/config/Database/Sequelize';
import decamelize from 'decamelize';

const sequelize = new Sequelize(config);

// Change field names to snake_cased column names for database
sequelize.addHook('beforeDefine', attributes => {
    Object.keys(attributes).forEach(key => {
        if (typeof attributes[key] !== "function") {
            attributes[key].field = decamelize(key);
        }
    })
});
// Change timestamp field names to snake_cased for database
sequelize.addHook('afterDefine', (model) => {
    if (model.rawAttributes['dateCreated']) {
        model.rawAttributes.dateCreated.field = 'date_created';
    }
    if (model.rawAttributes['dateUpdated']) {
        model.rawAttributes.dateUpdated.field = 'date_updated';
    }
});

export default sequelize;