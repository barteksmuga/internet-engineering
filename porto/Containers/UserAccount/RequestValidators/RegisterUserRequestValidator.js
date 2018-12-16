import RequestValidator from '~/porto/Ship/Abstracts/RequestValidator';
import RequiredRule from "~/porto/Ship/Rules/RequiredRule";
import IsEmailRule from "~/porto/Ship/Rules/IsEmailRule";

class RegisterUserRequestValidator extends RequestValidator {
    get rules () {
        return {
            name: [new RequiredRule()],
            email: [new RequiredRule(), new IsEmailRule()],
            password: [new RequiredRule()]
        }
    }
}

export default RegisterUserRequestValidator;