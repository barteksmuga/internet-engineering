const Controller = require('../../../Ship/Abstracts/Controller');
const Response = require('../../../Ship/Response/Response');
const LoginUserRequestValidator = require('../RequestValidators/LoginUserRequestValidator');
const LoginUserAction = require('../Actions/LoginUserAction');
const LoginUserTransferObject = require('../TransferObjects/LoginUserTransferObject');

class AuthenticationController extends Controller {
    static login (request, response) {
        let transferObject = new LoginUserTransferObject(request.validatedParams);
        let action = new LoginUserAction(transferObject);
        action.run().then(data => {
            Response.success(response, data);
        }).catch(exception => {
            Response.error(response, exception);
        });
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

module.exports = AuthenticationController;