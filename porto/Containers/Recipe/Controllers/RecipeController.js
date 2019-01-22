import CreateRecipeRequestValidator from "~/porto/Containers/Recipe/RequestValidators/CreateRecipeRequestValidator";
import Controller from "~/porto/Ship/Abstracts/Controller";
import GetRecipeListRequestValidator from "~/porto/Containers/Recipe/RequestValidators/GetRecipeListRequestValidator";
import GetRecipeByIdRequestValidator from "~/porto/Containers/Recipe/RequestValidators/GetRecipeByIdRequestValidator";
import UpdateRecipeByIdRequestValidator from "~/porto/Containers/Recipe/RequestValidators/UpdateRecipeByIdRequestValidator";
import RemoveRecipeByIdRequestValidator from "~/porto/Containers/Recipe/RequestValidators/RemoveRecipeByIdRequestValidator";
import GetRecipeListTransferObject from "~/porto/Containers/Recipe/TransferObjects/GetRecipeListTransferObject";
import GetRecipeListAction from "~/porto/Containers/Recipe/Actions/GetRecipeListAction";
import GetRecipeByIdTransferObject from "~/porto/Containers/Recipe/TransferObjects/GetRecipeByIdTransferObject";
import GetRecipeByIdAction from "~/porto/Containers/Recipe/Actions/GetRecipeByIdAction";
import CreateRecipeAction from "~/porto/Containers/Recipe/Actions/CreateRecipeAction";
import UpdateRecipeByIdAction from "~/porto/Containers/Recipe/Actions/UpdateRecipeByIdAction";
import RemoveRecipeByIdAction from "~/porto/Containers/Recipe/Actions/RemoveRecipeByIdAction";
import CreateRecipeTransferObject from "~/porto/Containers/Recipe/TransferObjects/CreateRecipeTransferObject";
import UpdateRecipeByIdTransferObject from "~/porto/Containers/Recipe/TransferObjects/UpdateRecipeByIdTransferObject";
import RemoveRecipeByIdTransferObject from "~/porto/Containers/Recipe/TransferObjects/RemoveRecipeByIdTransferObject";
import Response from '~/porto/Ship/Response/Response';

class RecipeController extends Controller {
    static async getList (request, response) {
        let transferObject = new GetRecipeListTransferObject(request.validatedParams);
        let action = new GetRecipeListAction(transferObject);
        try {
            const data = await action.run();
            Response.success(response, data);
        } catch (exception) {
            Response.error(response, exception);
        }
    }

    static async get (request, response) {
        let transferObject = new GetRecipeByIdTransferObject(request.validatedParams);
        let action = new GetRecipeByIdAction(transferObject);
        try {
            const data = await action.run();
            Response.success(response, data);
        } catch (exception) {
            Response.error(response, exception);
        }
    }

    static async create (request, response) {
        let transferObject = new CreateRecipeTransferObject(request.validatedParams);
        let action = new CreateRecipeAction(transferObject);
        try {
            const data = await action.run();
            Response.success(response, data);
        } catch (exception) {
            Response.error(response, exception);
        }
    }

    static async update (request, response) {
        let transferObject = new UpdateRecipeByIdTransferObject(request.validatedParams);
        let action = new UpdateRecipeByIdAction(transferObject);
        try {
            const data = await action.run();
            Response.success(response, data);
        } catch (exception) {
            Response.error(response, exception);
        }
    }

    static async remove (request, response) {
        let transferObject = new RemoveRecipeByIdTransferObject(request.validatedParams);
        let action = new RemoveRecipeByIdAction(transferObject);
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
                requestValidator: GetRecipeListRequestValidator,
                middlewares: []
            },
            get: {
                route: '/:id',
                method: 'GET',
                requestValidator: GetRecipeByIdRequestValidator,
                middlewares: []
            },
            create: {
                route: '/',
                method: 'POST',
                requestValidator: CreateRecipeRequestValidator,
                middlewares: []
            },
            update: {
                route: '/:id',
                method: 'PUT',
                requestValidator: UpdateRecipeByIdRequestValidator,
            },
            remove: {
                route: '/:id',
                method: 'DELETE',
                requestValidator: RemoveRecipeByIdRequestValidator,
            },
        };
    }

    static get routePrefix () {
        return '/recipes';
    }
}

export default RecipeController;
