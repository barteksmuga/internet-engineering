const Controller = require('../../../Ship/Abstracts/Controller');
const Response = require('../../../Ship/Response/Response');
const GetCategoryListAction = require('../Actions/GetCategoryListAction');
const GetCategoryListTransferObject = require('../TransferObjects/GetCategoryListTransferObject');
const GetCategoryByIdAction = require('../Actions/GetCategoryByIdAction');
const UpdateCategoryByIdAction = require('../Actions/UpdateCategoryByIdAction');
const RemoveCategoryByIdAction = require('../Actions/RemoveCategoryByIdAction');
const GetCategoryByIdTransferObject = require('../TransferObjects/GetCategoryByIdTransferObject');
const GetCategoryByIdRequestValidator = require('../RequestValidators/GetCategoryByIdRequestValidator');
const GetCategoryListRequestValidator = require('../RequestValidators/GetCategoryListRequestValidator');
const CreateCategoryRequestValidator = require('../RequestValidators/CreateCategoryRequestValidator');
const UpdateCategoryByIdRequestValidator = require('../RequestValidators/UpdateCategoryByIdRequestValidator');
const RemoveCategoryRequestValidator = require('../RequestValidators/RemoveCategoryRequestValidator');
const CreateCategoryAction = require('../Actions/CreateCategoryAction');
const CreateCategoryTransferObject = require('../TransferObjects/CreateCategoryTransferObject');
const UpdateCategoryByIdTransferObject = require('../TransferObjects/UpdateCategoryByIdTransferObject');
const RemoveCategoryByIdTransferObject = require('../TransferObjects/RemoveCategoryByIdTransferObject');
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
        let transferObject = new UpdateCategoryByIdTransferObject(req.validatedParams);
        let action = new UpdateCategoryByIdAction(transferObject);
        action.run().then(() => {
            Response.success(res, null, 204);
        }).catch(exception => {
            Response.error(res, exception);
        });
    }

    static remove (req, res) {
        let transferObject = new RemoveCategoryByIdTransferObject(req.validatedParams);
        let action = new RemoveCategoryByIdAction(transferObject);
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
                requestValidator: GetCategoryListRequestValidator,
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
                requestValidator: CreateCategoryRequestValidator,
                middlewares: []
            },
            update: {
                route: '/:id',
                method: 'PUT',
                requestValidator: UpdateCategoryByIdRequestValidator,
            },
            remove: {
                route: '/:id',
                method: 'DELETE',
                requestValidator: RemoveCategoryRequestValidator,
            },
        };
    }

    static get routePrefix () {
        return '/categories';
    }
}

module.exports = CategoryController;