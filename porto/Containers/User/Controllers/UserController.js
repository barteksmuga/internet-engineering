import Controller from '~/porto/Ship/Abstracts/Controller';
import Response from '~/porto/Ship/Response/Response';
import GetUserListAction from '~/porto/Containers/User/Actions/GetUserListAction';
import RegisterUserRequestValidator from '~/porto/Containers/User/RequestValidators/GetUserListRequestValidator';
import GetUserListTransferObject from '~/porto/Containers/User/TransferObjects/GetUserListTransferObject';

class UserController extends Controller {
    static async getList (request, response) {
        let transferObject = new GetUserListTransferObject(request.validatedParams);
        let action = new GetUserListAction(transferObject);
        try {
            const data = await action.run();
            Response.success(response, data);
        } catch (exception) {
            Response.error(response, exception);
        }
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

export default UserController;