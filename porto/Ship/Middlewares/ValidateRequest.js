import Middleware from '~/porto/Ship/Abstracts/Middleware';
import Exception from '~/porto/Ship/Abstracts/Exception';
import Response from '~/porto/Ship/Response/Response';

class ValidateRequest extends Middleware {
    constructor (requestValidatorClass) {
        super();
        this.validator = new requestValidatorClass();
    }

    async handle (request, response, next) {
        try {
            await this.validator.process(request);
            request.validatedParams = this.validator.validatedDataObject;
        } catch (exception) {
            if (exception instanceof Exception) {
                Response.error(response, exception);
                return;
            } else {
                throw exception;
            }
        }
        next();
    }
}

export default ValidateRequest;