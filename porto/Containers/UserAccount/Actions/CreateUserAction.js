const Action = require('../../../Ship/Abstracts/Action');
const User = require('../../User/Models/User');
const bcrypt = require('bcrypt');

class CreateUserAction extends Action {
    /**
     * @param transferObject
     * @return {Promise<User>}
     * @private
     */
    __process (transferObject) {
        return bcrypt.hash(transferObject.dataSet.password, parseInt(process.env.BCRYPT_SALT_ROUNDS)).then(hash => {
            transferObject.dataSet.password = hash;
            return User.create(transferObject.dataSet);
        });
    }
}

module.exports = CreateUserAction;