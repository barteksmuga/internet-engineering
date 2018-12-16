import RequestValidator from '~/porto/Ship/Abstracts/RequestValidator';
import RequiredRule from "~/porto/Ship/Rules/RequiredRule";
import IsEmailRule from "~/porto/Ship/Rules/IsEmailRule";
import InvalidEmailException from "~/porto/Ship/Exceptions/InvalidEmailException";

class LoginUserRequestValidator extends RequestValidator {
    get rules () {
        return {
            email: [new RequiredRule(), {
                rule: new IsEmailRule(),
                exception: {
                    class: InvalidEmailException,
                    message: 'invalidEmail',
                }
            }],
            password: [new RequiredRule()]
        };
    }
}

export default LoginUserRequestValidator;