import CreateRecipeRequestValidator from "~/porto/Containers/Recipe/RequestValidators/CreateRecipeRequestValidator";
import Controller from "~/porto/Ship/Abstracts/Controller";
import GetRecipeListRequestValidator from "~/porto/Containers/Recipe/RequestValidators/GetRecipeListRequestValidator";
import GetRecipeByIdRequestValidator from "~/porto/Containers/Recipe/RequestValidators/GetRecipeByIdRequestValidator";
import UpdateRecipeByIdRequestValidator from "~/porto/Containers/Recipe/RequestValidators/UpdateRecipeByIdRequestValidator";
import RemoveRecipeByIdRequestValidator from "~/porto/Containers/Recipe/RequestValidators/RemoveRecipeByIdRequestValidator";
import GetRecipeListTransferObject from "~/porto/Containers/Recipe/TransferObjects/GetRecipeListTransferObject";
import GetRecipeListAction from "~/porto/Containers/Recipe/Actions/GetRecipeListAction";

class RecipeController extends Controller {
    static getList (req, res) {
        let transferObject = new GetRecipeListTransferObject(req.validatedParams);
        let action = new GetRecipeListAction(transferObject);
        action.run().then(data => {
            Response.success(res, data);
        }).catch(error => {
            Response.error(res, error);
        });
    }

    static get (req, res) {
        let transferObject = new GetRecipeByIdTransferObject(req.validatedParams);
        let action = new GetRecipeByIdAction(transferObject);
        action.run().then(data => {
            Response.success(res, data);
        }).catch(error => {
            Response.error(res, error);
        });
    }

    static create (req, res) {
        let transferObject = new CreateRecipeTransferObject(req.validatedParams);
        let action = new CreateRecipeAction(transferObject);
        action.run().then(data => {
            Response.success(res, data);
        }).catch(error => {
            Response.error(res, error);
        });
    }

    static update (req, res) {
        let transferObject = new UpdateRecipeByIdTransferObject(req.validatedParams);
        let action = new UpdateRecipeByIdAction(transferObject);
        action.run().then(data => {
            Response.success(res, data);
        }).catch(error => {
            Response.error(res, error);
        });
    }

    static remove (req, res) {
        let transferObject = new RemoveRecipeByIdTransferObject(req.validatedParams);
        let action = new RemoveRecipeByIdAction(transferObject);
        action.run().then(data => {
            Response.success(res, data);
        }).catch(error => {
            Response.error(res, error);
        });
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
