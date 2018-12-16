import RequestValidator from '~/porto/Ship/Abstracts/RequestValidator';
import LoggedGuard from '~/porto/Ship/Guards/LoggedGuard';
import RequiredRule from "../../../Ship/Rules/RequiredRule";

class CreateIngredientRequestValidator extends RequestValidator {
    get guards () {
        return [
            [
                new LoggedGuard()
            ]
        ];
    }

    get rules () {
        return {
            name: [new RequiredRule()]
        }
    }
}

export default CreateIngredientRequestValidator;