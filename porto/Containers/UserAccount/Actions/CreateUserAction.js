import Action from '~/porto//Ship/Abstracts/Action';
import User from '~/porto/Containers/User/Models/User';
import bcrypt from 'bcrypt';

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

export default CreateUserAction;