import Controller from '~/porto/Ship/Abstracts/Controller';
import Response from '~/porto/Ship/Response/Response';
import RegisterUserRequestValidator from '~/porto/Containers/UserAccount/RequestValidators/RegisterUserRequestValidator';
import CreateUserAction from '~/porto/Containers/UserAccount/Actions/CreateUserAction';
import CreateUserTransferObject from '~/porto/Containers/UserAccount/TransferObjects/CreateUserTransferObject';

class RegisterController extends Controller {
    static register (request, response) {
        let transferObject = new CreateUserTransferObject(request.validatedParams);
        let action = new CreateUserAction(transferObject);
        action.run().then(data => {
            Response.success(response, data);
        }).catch(exception => {
            Response.error(response, exception);
        });
    }

    static get routeMap () {
        return {
            register: {
                route: '/',
                method: 'POST',
                requestValidator: RegisterUserRequestValidator,
                middlewares: []
            },
        };
    }

    static get routePrefix () {
        return '/users';
    }
}

export default RegisterController;