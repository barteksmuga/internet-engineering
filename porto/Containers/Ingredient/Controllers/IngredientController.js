import GetIngredientListTransferObject from "../TransferObjects/GetIngredientListTransferObject";
import GetIngredientListAction from "../Actions/GetIngredientListAction";
import Controller from "../../../Ship/Abstracts/Controller";
import GetIngredientByIdTransferObject from "../TransferObjects/GetIngredientByIdTransferObject";
import GetIngredientByIdAction from "../Actions/GetIngredientByIdAction";
import CreateIngredientAction from "../Actions/CreateIngredientAction";
import CreateIngredientTransferObject from "~/porto/Containers/Ingredient/TransferObjects/CreateIngredientTransferObject";

class IngredientController extends Controller {
    static getList (req, res) {
        let transferObject = new GetIngredientListTransferObject(req.validatedParams);
        let action = new GetIngredientListAction(transferObject);
        action.run().then(data => {
            Response.success(res, data);
        }).catch(error => {
            Response.error(res, error)
        })
    }

    static get (req, res) {
        let transferObject = new GetIngredientByIdTransferObject(req.validatedParams);
        let action = new GetIngredientByIdAction(transferObject);
        action.run().then(data => {
            Response.success(res, data);
        }).catch(error => {
            Response.error(res, error);
        })
    }

    static create (req, res) {
        let transferObject = new CreateIngredientTransferObject(req.validatedParams);
        let action = new CreateIngredientAction(transferObject);
        action.run().then(data => {
            Response.success(res, data);
        }).catch(error => {
            Response.error(res, error);
        })
    }

    static update (req, res) {
        let transferObject = new UpdateIngredientByIdTransferObject(req.validatedParams);
        let action = new UpdateIngredientByIdAction(transferObject);
        action.run().then(data => {
            Response.success(res, data);
        }).catch(error => {
            Response.error(res, error);
        })
    }

    static remove (req, res) {
        let transferObject = new RemoveIngredientByIdAction(req.validatedParams);
        let action = new RemoveIngredientByIdAction(transferObject);
        action.run().then(data => {
            Response.success(res, data);
        }).catch(error => {
            Response.error(res, error);
        })
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
                requestValidator: CreateIngredientByIdRequestValidator,
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