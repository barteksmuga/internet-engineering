import Action from '~/porto/Ship/Abstracts/Action';
import LoginUserTransferObject from '~/porto/Containers/Authentication/TransferObjects/LoginUserTransferObject';
import InvalidCredentialsException from '~/porto/Containers/Authentication/Exceptions/InvalidCredentialsException';
import CreateJwtTokenTask from '~/porto/Containers/Authentication/Tasks/CreateJwtTokenTask';
import User from '~/porto/Containers/User/Models/User';
import bcrypt from 'bcrypt';

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
                ...user.toJSON(),
                token: (new CreateJwtTokenTask()).run(user)
            };
        }).catch(error => {
            throw new InvalidCredentialsException();
        });
    }
}

export default LoginUserAction;