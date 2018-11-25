const Action = require('../../../Ship/Abstracts/Action');
const User = require('../../User/Models/User');

class CreateUserAction extends Action {
    /**
     * @param transferObject
     * @return {Promise<User>}
     * @private
     */
    __process (transferObject) {
        return User.create(transferObject.dataSet);
    }
}

module.exports = CreateUserAction;