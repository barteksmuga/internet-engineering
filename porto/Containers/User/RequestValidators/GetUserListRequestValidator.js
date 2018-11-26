const RequestValidator = require('../../../Ship/Abstracts/RequestValidator');
const LoggedGuard = require('../../../Ship/Guards/LoggedGuard');

class GetUserListRequestValidator extends RequestValidator {
    get guards () {
        return [
            [
                new LoggedGuard()
            ]
        ];
    }
}

module.exports = GetUserListRequestValidator;