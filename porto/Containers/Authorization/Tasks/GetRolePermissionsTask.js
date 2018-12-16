import PermissionRole from "~/porto/Containers/Authorization/Models/PermissionRole";

class GetPermissionRolesTask {
    /**
     *
     * @param {object} where
     * @return {Promise<Array<Model>>}
     */
    async run (where) {
        return await PermissionRole.findAll({where});
    }
}

export default GetPermissionRolesTask;