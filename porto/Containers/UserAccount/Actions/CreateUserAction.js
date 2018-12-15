import Action from '~/porto//Ship/Abstracts/Action';
import User from '~/porto/Containers/User/Models/User';
import bcrypt from 'bcrypt';

class CreateUserAction extends Action {
    /**
     *
     * @return {Promise<void>}
     */
    async run () {
        this.transferObject.dataSet.password = await bcrypt.hash(this.transferObject.dataSet.password, parseInt(process.env.BCRYPT_SALT_ROUNDS));
        return await User.create(this.transferObject.dataSet);
    }
}

export default CreateUserAction;