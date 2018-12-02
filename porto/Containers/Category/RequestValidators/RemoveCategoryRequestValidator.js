import RequestValidator from '~/porto/Ship/Abstracts/RequestValidator';
import LoggedGuard from '~/porto/Ship/Guards/LoggedGuard';

class RemoveCategoryRequestValidator extends RequestValidator {
    get guards () {
        return [
            [
                new LoggedGuard()
            ]
        ];
    }
}

export default RemoveCategoryRequestValidator;