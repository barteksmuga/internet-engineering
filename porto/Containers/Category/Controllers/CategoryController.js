const Controller = require('../../../Ship/Abstracts/Controller');
const Response = require('../../../Ship/Response/Response');
const RequestValidator = require('../../../Ship/Abstracts/RequestValidator');
const GetCategoryListAction = require('../Actions/GetCategoryListAction');
const GetCategoryListTransferObject = require('../TransferObjects/GetCategoryListTransferObject');
const GetCategoryByIdAction = require('../Actions/GetCategoryByIdAction');
const GetCategoryByIdTransferObject = require('../TransferObjects/GetCategoryByIdTransferObject');
const GetCategoryByIdRequestValidator = require('../RequestValidators/GetCategoryByIdRequestValidator');
const CreateCategoryAction = require('../Actions/CreateCategoryAction');
const CreateCategoryTransferObject = require('../TransferObjects/CreateCategoryTransferObject');
const TestMiddleware = require('../Middlewares/Test');

class CategoryController extends Controller {
    static getList (req, res) {
        let transferObject = new GetCategoryListTransferObject(req.validatedParams);
        let action = new GetCategoryListAction(transferObject);
        action.run().then(data => {
            Response.success(res, data);
        }).catch(exception => {
            Response.error(res, exception);
        });
    }

    static get (req, res) {
        let transferObject = new GetCategoryByIdTransferObject(req.validatedParams);
        let action = new GetCategoryByIdAction(transferObject);
        action.run().then(data => {
            Response.success(res, data);
        }).catch(exception => {
            Response.error(res, exception);
        });
    }

    static create (req, res) {
        let transferObject = new CreateCategoryTransferObject(req.validatedParams);
        let action = new CreateCategoryAction(transferObject);
        action.run().then(data => {
            Response.success(res, data, 201);
        }).catch(exception => {
            Response.error(res, exception);
        });
    }

    static update (req, res) {
        let transferObject = new GetCategoryByIdTransferObject(req.validatedParams);
        let action = new GetCategoryByIdAction(transferObject);
        action.run().then(() => {
            Response.success(res, null, 204);
        }).catch(exception => {
            Response.error(res, exception);
        });
    }

    static remove (req, res) {
        let transferObject = new GetCategoryByIdTransferObject(req.validatedParams);
        let action = new GetCategoryByIdAction(transferObject);
        action.run().then(() => {
            Response.success(res, null, 204);
        }).catch(exception => {
            Response.error(res, exception);
        });
    }

    static get routeMap () {
        return {
            getList: {
                route: '/',
                method: 'GET',
                requestValidator: RequestValidator, //todo: change validator
                middlewares: []
            },
            get: {
                route: '/:id',
                method: 'GET',
                requestValidator: GetCategoryByIdRequestValidator,
                middlewares: [TestMiddleware]
            },
            create: {
                route: '/',
                method: 'POST',
                requestValidator: RequestValidator,
                middlewares: []
            },
            update: {
                route: '/:id',
                method: 'PUT',
                requestValidator: RequestValidator,
            },
            remove: {
                route: '/:id',
                method: 'DELETE',
                requestValidator: RequestValidator,
            },
        };
    }

    static get routePrefix () {
        return '/categories';
    }
}

module.exports = CategoryController;