const Action = require('../../../Ship/Abstracts/Action');
const GetUserListTransferObject = require('../TransferObjects/GetUserListTransferObject');
const User = require('../Models/User');

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

module.exports = GetUserListAction;