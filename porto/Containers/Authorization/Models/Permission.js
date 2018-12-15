import seq from '~/helpers/Sequelize';

const Permission = seq.define('permissions', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: seq.Sequelize.INTEGER,
        },
        name: {
            unique: true,
            allowNull: false,
            type: seq.Sequelize.STRING
        },
    }
);

Permission.sync();

export default Permission;