import config from '~/config/Database/database';
const db = config[config.defaultEnv];
import {Op} from 'sequelize';

export default Object.assign({}, db, {
    operatorsAliases: Op,
    define: {
        timestamps: true,
        createdAt: 'dateCreated',
        updatedAt: 'dateUpdated',
    },
});