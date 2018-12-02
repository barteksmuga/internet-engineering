import Action from '~/porto/Ship/Abstracts/Action';
import GetUserListTransferObject from '~/porto/Containers/User/TransferObjects/GetUserListTransferObject';
import User from '~/porto/Containers/User/Models/User';

class GetUserListAction extends Action {
    /**
     * @param {GetUserListTransferObject} transferObject
     * @return {Promise<array>}
     * @private
     */
    __process (transferObject) {
        return User.findAll({
            where: transferObject.dataSet
        });
    }
}

export default GetUserListAction;