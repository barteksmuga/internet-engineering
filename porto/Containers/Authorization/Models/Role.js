import seq from '~/helpers/Sequelize';

const Role = seq.define('roles', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: seq.Sequelize.INTEGER,
        },
        name: {
            allowNull: false,
            type: seq.Sequelize.STRING
        },
    }
);

Role.sync();

export default Role;