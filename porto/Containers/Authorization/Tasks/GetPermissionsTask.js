import Permission from "~/porto/Containers/Authorization/Models/Permission";

class GetPermissionsTask {
    /**
     *
     * @param {object} where
     * @return {Promise<Array<Model>>}
     */
    async run (where) {
        return await Permission.findAll({where});
    }
}

export default GetPermissionsTask;