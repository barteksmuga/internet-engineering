import RequestValidator from '~/porto/Ship/Abstracts/RequestValidator';
import RequiredRule from "~/porto/Ship/Rules/RequiredRule";
import IsEmailRule from "~/porto/Ship/Rules/IsEmailRule";
import InvalidException from "~/porto/Ship/Exceptions/InvalidException";

class LoginUserRequestValidator extends RequestValidator {
    get rules () {
        return {
            email: [new RequiredRule(), {
                rule: new IsEmailRule(),
                exception: {
                    class: InvalidException,
                    message: 'invalidEmail',
                }
            }],
            password: [new RequiredRule()]
        };
    }
}

export default LoginUserRequestValidator;