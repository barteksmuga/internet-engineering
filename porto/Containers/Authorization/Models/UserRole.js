import seq from '~/helpers/Sequelize';
import User from "~/porto/Containers/User/Models/User";
import Role from "~/porto/Containers/Authorization/Models/Role";

const UserRole = seq.define('user_roles', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: seq.Sequelize.INTEGER,
        },
        userId: {
            allowNull: false,
            type: seq.Sequelize.INTEGER,
        },
        roleId: {
            allowNull: false,
            type: seq.Sequelize.INTEGER
        },
        scope: {
            type: seq.Sequelize.STRING
        },
        scopeId: {
            type: seq.Sequelize.INTEGER
        }
        //scope_id required when scope provided
    }
);

User.belongsToMany(Role, {
    through: {
        model: UserRole,
        unique: false
    },
});
Role.belongsToMany(User, {
    through: {
        model: UserRole,
        unique: false
    }
});
UserRole.belongsTo(Role);
Role.hasMany(UserRole);
UserRole.belongsTo(User);
User.hasMany(UserRole);
UserRole.sync();

export default UserRole;