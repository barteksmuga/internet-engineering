const Action = require('../../../Ship/Abstracts/Action');
const LoginUserTransferObject = require('../TransferObjects/LoginUserTransferObject');
const InvalidCredentialsException = require('../Exceptions/InvalidCredentialsException');
const CreateJwtTokenTask = require('../Tasks/CreateJwtTokenTask');
const User = require('../../User/Models/User');
const bcrypt = require('bcrypt');

class LoginUserAction extends Action {
    /**
     * @param {LoginUserTransferObject} transferObject
     * @return {Promise<array>}
     * @private
     */
    __process (transferObject) {
        return User.findOne({
            where: {
                email: transferObject.get('email')
            }
        }).then(user => {
            if (!bcrypt.compareSync(transferObject.get('password'), user.password)) {
                return Promise.reject();
            }
            return {
                user,
                token: (new CreateJwtTokenTask()).run(user)
            };
        }).catch(error => {
            throw new InvalidCredentialsException();
        });
    }
}

module.exports = LoginUserAction;