import GetIngredientListTransferObject from "../TransferObjects/GetIngredientListTransferObject";
import GetIngredientListAction from "../Actions/GetIngredientListAction";
import Controller from "../../../Ship/Abstracts/Controller";
import GetIngredientByIdTransferObject from "../TransferObjects/GetIngredientByIdTransferObject";
import GetIngredientByIdAction from "../Actions/GetIngredientByIdAction";
import CreateIngredientAction from "../Actions/CreateIngredientAction";
import CreateIngredientTransferObject from "~/porto/Containers/Ingredient/TransferObjects/CreateIngredientTransferObject";
import GetIngredientListRequestValidator from "../RequestValidators/GetIngredientListRequestValidator";
import GetIngredientByIdRequestValidator from "../RequestValidators/GetIngredientByIdRequestValidator";
import CreateIngredientRequestValidator from "../RequestValidators/CreateIngredientRequestValidator";
import UpdateIngredientByIdRequestValidator from "../RequestValidators/UpdateIngredientByIdRequestValidator";
import RemoveIngredientByIdRequestValidator from "../RequestValidators/RemoveIngredientByIdRequestValidator";
import UpdateIngredientByIdAction from "../Actions/UpdateIngredientByIdAction";
import UpdateIngredientByIdTransferObject from "../TransferObjects/UpdateIngredientByIdTransferObject";
import RemoveIngredientByIdTransferObject from "../TransferObjects/RemoveIngredientByIdTransferObject";
import RemoveIngredientByIdAction from "../Actions/RemoveIngredientByIdAction";
import Response from '~/porto/Ship/Response/Response';

class IngredientController extends Controller {
    static async getList (request, response) {
        let transferObject = new GetIngredientListTransferObject(request.validatedParams);
        let action = new GetIngredientListAction(transferObject);
        try {
            const data = await action.run();
            Response.success(response, data);
        } catch (exception) {
            Response.error(response, exception);
        }
    }

    static async get (request, response) {
        let transferObject = new GetIngredientByIdTransferObject(request.validatedParams);
        let action = new GetIngredientByIdAction(transferObject);
        try {
            const data = await action.run();
            Response.success(response, data);
        } catch (exception) {
            Response.error(response, exception);
        }
    }

    static async create (request, response) {
        let transferObject = new CreateIngredientTransferObject(request.validatedParams);
        let action = new CreateIngredientAction(transferObject);
        try {
            const data = await action.run();
            Response.success(response, data);
        } catch (exception) {
            Response.error(response, exception);
        }
    }

    static async update (request, response) {
        let transferObject = new UpdateIngredientByIdTransferObject(request.validatedParams);
        let action = new UpdateIngredientByIdAction(transferObject);
        try {
            const data = await action.run();
            Response.success(response, data);
        } catch (exception) {
            Response.error(response, exception);
        }
    }

    static async remove (request, response) {
        let transferObject = new RemoveIngredientByIdTransferObject(request.validatedParams);
        let action = new RemoveIngredientByIdAction(transferObject);
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
                requestValidator: GetIngredientListRequestValidator,
                middlewares: []
            },
            get: {
                route: '/:id',
                method: 'GET',
                requestValidator: GetIngredientByIdRequestValidator,
                middlewares: []
            },
            create: {
                route: '/',
                method: 'POST',
                requestValidator: CreateIngredientRequestValidator,
                middlewares: []
            },
            update: {
                route: '/:id',
                method: 'PUT',
                requestValidator: UpdateIngredientByIdRequestValidator,
            },
            remove: {
                route: '/:id',
                method: 'DELETE',
                requestValidator: RemoveIngredientByIdRequestValidator,
            },
        };
    }

    static get routePrefix () {
        return '/ingredients';
    }
}

export default IngredientController;