import Controller from '~/porto/Ship/Abstracts/Controller';
import Response from '~/porto/Ship/Response/Response';
import GetCategoryListAction from '~/porto/Containers/Category/Actions/GetCategoryListAction';
import GetCategoryListTransferObject from '~/porto/Containers/Category/TransferObjects/GetCategoryListTransferObject';
import GetCategoryByIdAction from '~/porto/Containers/Category/Actions/GetCategoryByIdAction';
import UpdateCategoryByIdAction from '~/porto/Containers/Category/Actions/UpdateCategoryByIdAction';
import RemoveCategoryByIdAction from '~/porto/Containers/Category/Actions/RemoveCategoryByIdAction';
import GetCategoryByIdTransferObject from '~/porto/Containers/Category/TransferObjects/GetCategoryByIdTransferObject';
import GetCategoryByIdRequestValidator from '~/porto/Containers/Category/RequestValidators/GetCategoryByIdRequestValidator';
import GetCategoryListRequestValidator from '~/porto/Containers/Category/RequestValidators/GetCategoryListRequestValidator';
import CreateCategoryRequestValidator from '~/porto/Containers/Category/RequestValidators/CreateCategoryRequestValidator';
import UpdateCategoryByIdRequestValidator from '~/porto/Containers/Category/RequestValidators/UpdateCategoryByIdRequestValidator';
import RemoveCategoryRequestValidator from '~/porto/Containers/Category/RequestValidators/RemoveCategoryRequestValidator';
import CreateCategoryAction from '~/porto/Containers/Category/Actions/CreateCategoryAction';
import CreateCategoryTransferObject from '~/porto/Containers/Category/TransferObjects/CreateCategoryTransferObject';
import UpdateCategoryByIdTransferObject from '~/porto/Containers/Category/TransferObjects/UpdateCategoryByIdTransferObject';
import RemoveCategoryByIdTransferObject from '~/porto/Containers/Category/TransferObjects/RemoveCategoryByIdTransferObject';
import TestMiddleware from '~/porto/Containers/Category/Middlewares/Test';

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

export default CategoryController;