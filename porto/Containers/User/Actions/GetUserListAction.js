import Action from '~/porto/Ship/Abstracts/Action';
import User from '~/porto/Containers/User/Models/User';

class GetUserListAction extends Action {
    /**
     *
     * @return {Promise<Array<Model>>}
     */
    async run () {
        return await User.findAll({
            where: this.transferObject.dataSet
        });
    }
}

export default GetUserListAction;