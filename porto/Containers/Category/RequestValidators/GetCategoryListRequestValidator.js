const RequestValidator = require('../../../Ship/Abstracts/RequestValidator');
const LoggedGuard = require('../../../Ship/Guards/LoggedGuard');

class GetCategoryListRequestValidator extends RequestValidator {
    get guards () {
        return [
            [
                new LoggedGuard()
            ]
        ];
    }
}

module.exports = GetCategoryListRequestValidator;