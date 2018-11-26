const Controller = require('../../../Ship/Abstracts/Controller');
const Response = require('../../../Ship/Response/Response');
const GetUserListAction = require('../Actions/GetUserListAction');
const RegisterUserRequestValidator = require('../RequestValidators/GetUserListRequestValidator');
const GetUserListTransferObject = require('../TransferObjects/GetUserListTransferObject');

class UserController extends Controller {
    static getList (request, response) {
        let transferObject = new GetUserListTransferObject(request.validatedParams);
        let action = new GetUserListAction(transferObject);
        action.run().then(data => {
            Response.success(response, data);
        }).catch(exception => {
            Response.error(response, exception);
        });
    }

    static get routeMap () {
        return {
            getList: {
                route: '/',
                method: 'GET',
                requestValidator: RegisterUserRequestValidator,
                middlewares: []
            },
        };
    }

    static get routePrefix () {
        return '/users';
    }
}

module.exports = UserController;