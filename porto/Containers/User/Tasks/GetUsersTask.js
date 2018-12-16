import User from "~/porto/Containers/User/Models/User";

class GetUsersTask {
    /**
     *
     * @param {object} where
     * @param {object} options
     * @return {Array<Model>}
     */
    async run (where, options) {
        if (typeof options === "undefined") {
            options = {};
        }
        options.where = where;
        const users = await User.findAll(options);
        return users;
    }
}

export default GetUsersTask;