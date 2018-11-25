const Middleware = require('../Abstracts/Middleware');
const Exception = require('../Abstracts/Exception');
const Response = require('../Response/Response');

class ValidateRequest extends Middleware {
    constructor (requestValidatorClass) {
        super();
        this.validator = new requestValidatorClass();
    }

    handle (request, response, next) {
        try {
            this.validator.process(request);
            request.validatedParams = this.validator.getValidatedDataObject();
        } catch (exception) {
            if (exception instanceof Exception) {
                console.error(exception.errorKey);
                Response.error(response, exception);
            } else {
                throw exception;
            }
        }
        next();
    }
}

module.exports = ValidateRequest;