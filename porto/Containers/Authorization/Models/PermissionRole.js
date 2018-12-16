import seq from '~/helpers/Sequelize';
import Permission from "~/porto/Containers/Authorization/Models/Permission";
import Role from "~/porto/Containers/Authorization/Models/Role";

const PermissionRole = seq.define('permission_roles', {
        permissionId: {
            allowNull: false,
            type: seq.Sequelize.INTEGER,
        },
        roleId: {
            allowNull: false,
            type: seq.Sequelize.INTEGER
        },
    }
);

Permission.belongsToMany(Role, {through: PermissionRole});
Role.belongsToMany(Permission, {through: PermissionRole});
PermissionRole.sync();

export default PermissionRole;