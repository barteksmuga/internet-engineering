const RequestValidator = require('../../../Ship/Abstracts/RequestValidator');

class GetCategoryByIdRequestValidator extends RequestValidator {
    validate () {
        //todo check in db
        if (this.validatedParams.id > 5) {
            console.log('greater');
        } else {
            console.log('lower');
        }
    }
}

module.exports = GetCategoryByIdRequestValidator;