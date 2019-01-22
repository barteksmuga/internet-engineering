import Guard from '~/porto/Ship/Abstracts/Guard';
import LoggedGuard from "~/porto/Ship/Guards/LoggedGuard";
import GetUsersTask from "~/porto/Containers/User/Tasks/GetUsersTask";
import Collection from "~/porto/Ship/Helpers/Collection";
import Role from "~/porto/Containers/Authorization/Models/Role";
import Permission from "~/porto/Containers/Authorization/Models/Permission";
import UserRole from "~/porto/Containers/Authorization/Models/UserRole";

class HasPermissionGuard extends Guard {
    /**
     * @param {object} config
     * @param {string} config.permission permission name
     * @param {?string|object} config.operatorField request's field name which value is id of user that is required to have permission OR object (see below); if null, request.user is used (loggedGuard is processed if request.user is empty)
     * @param {?string} config.operatorField.field request's field name which value will be compared with database value
     * @param {?string} config.operatorField.column name of column in database, that value must match with request config.operatorField.field value; DATABASE COLUMN SHOULD BE UNIQUE
     * @param {string} config.scope name of permission scope; if user has permission without scope, he passes; if user has permission with different scope or scopeId (see below), he doesn't
     * @param {string} config.scopeId id of scope that must match in role when scoped role used
     */
    constructor (config) {
        super();
        this.config = config;
    }

    async check (request) {
        if (!request.user && !this.config.operatorField) {
            let loggedGuard = new LoggedGuard();
            const result = await loggedGuard.check(request);
            if (!result) {
                return false;
            }
        }
        let userWhere = {};
        if (this.config.operatorField) {
            if (typeof this.config.operatorField === "object") {
                userWhere[this.config.operatorField.column] = request.validatedParams[this.config.operatorField.field];
            } else {
                userWhere = {id: this.config.operatorField};
            }
        } else {
            userWhere = {id: request.user.id};
        }
        const user = (await (new GetUsersTask).run(userWhere, {
            include: {
                model: UserRole,
                include: {
                    model: Role,
                    include: [Permission]
                }
            }
        }))[0];
        const userRoles = new Collection(user.user_roles);
        let searchedPermission = userRoles.find({
            'role.permissions.name': this.config.permission,
            'scope': this.config.scope,
            'scopeId': this.config.scopeId,
        });
        console.log(userRoles.pluck('role.permissions.name'));
        if (searchedPermission !== null) {
            return true;
        }
        searchedPermission = userRoles.find({
            'role.permissions.name': this.config.permission,
            'scope': null,
        });
        return searchedPermission !== null;
    }
}

export default HasPermissionGuard;