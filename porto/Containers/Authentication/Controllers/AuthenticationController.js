import Controller from '~/porto/Ship/Abstracts/Controller';
import Response from '~/porto/Ship/Response/Response';
import LoginUserRequestValidator from '~/porto/Containers/Authentication/RequestValidators/LoginUserRequestValidator';
import LoginUserAction from '~/porto/Containers/Authentication/Actions/LoginUserAction';
import LoginUserTransferObject from '~/porto/Containers/Authentication/TransferObjects/LoginUserTransferObject';

class AuthenticationController extends Controller {
    static async login (request, response) {
        let transferObject = new LoginUserTransferObject(request.validatedParams);
        let action = new LoginUserAction(transferObject);
        try {
            const data = await action.run();
            Response.success(response, data);
        } catch (exception) {
            Response.error(response, exception);
        }
    }

    static get routeMap () {
        return {
            login: {
                route: '/login',
                method: 'POST',
                requestValidator: LoginUserRequestValidator,
                middlewares: []
            },
        };
    }

    static get routePrefix () {
        return '/users';
    }
}

export default AuthenticationController;