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
    static async getList (request, response) {
        let transferObject = new GetCategoryListTransferObject(request.validatedParams);
        let action = new GetCategoryListAction(transferObject);
        try {
            const data = await action.run();
            Response.success(response, data);
        } catch (exception) {
            Response.error(response, exception);
        }
    }

    static async get (request, response) {
        let transferObject = new GetCategoryByIdTransferObject(request.validatedParams);
        let action = new GetCategoryByIdAction(transferObject);
        try {
            const data = await action.run();
            Response.success(response, data);
        } catch (exception) {
            Response.error(response, exception);
        }
    }

    static async create (request, response) {
        let transferObject = new CreateCategoryTransferObject(request.validatedParams);
        let action = new CreateCategoryAction(transferObject);
        try {
            const data = await action.run();
            Response.success(response, data, 201);
        } catch (exception) {
            Response.error(response, exception);
        }
    }

    static async update (request, response) {
        let transferObject = new UpdateCategoryByIdTransferObject(request.validatedParams);
        let action = new UpdateCategoryByIdAction(transferObject);
        try {
            await action.run();
            Response.success(response, null, 204);
        } catch (exception) {
            Response.error(response, exception);
        }
    }

    static async remove (request, response) {
        let transferObject = new RemoveCategoryByIdTransferObject(request.validatedParams);
        let action = new RemoveCategoryByIdAction(transferObject);
        try {
            await action.run();
            Response.success(response, null, 204);
        } catch (exception) {
            Response.error(response, exception);
        }
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