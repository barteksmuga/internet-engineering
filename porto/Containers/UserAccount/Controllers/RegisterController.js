const Controller = require('../../../Ship/Abstracts/Controller');
const Response = require('../../../Ship/Response/Response');
const RegisterUserRequestValidator = require('../RequestValidators/RegisterUserRequestValidator');
const CreateUserAction = require('../Actions/CreateUserAction');
const CreateUserTransferObject = require('../TransferObjects/CreateUserTransferObject');

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

module.exports = RegisterController;