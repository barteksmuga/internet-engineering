import Action from '~/porto/Ship/Abstracts/Action';
import InvalidCredentialsException from '~/porto/Containers/Authentication/Exceptions/InvalidCredentialsException';
import CreateJwtTokenTask from '~/porto/Containers/Authentication/Tasks/CreateJwtTokenTask';
import User from '~/porto/Containers/User/Models/User';
import bcrypt from 'bcrypt';

class LoginUserAction extends Action {
    /**
     *
     * @return {Promise<User>}
     */
    async run () {
        let user;
        try {
            user = await User.findOne({
                where: {
                    email: this.transferObject.get('email')
                }
            });
        } catch (exception) {
            throw exception;
        }
        if (!bcrypt.compareSync(this.transferObject.get('password'), user.password)) {
            throw new InvalidCredentialsException();
        }
        return {
            user,
            token: (new CreateJwtTokenTask()).run(user)
        };
    }
}

export default LoginUserAction;