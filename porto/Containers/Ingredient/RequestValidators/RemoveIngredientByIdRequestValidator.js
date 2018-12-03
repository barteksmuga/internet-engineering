import RequestValidator from '~/porto/Ship/Abstracts/RequestValidator';
import LoggedGuard from '~/porto/Ship/Guards/LoggedGuard';
import RequiredRule from "../../../Ship/Rules/RequiredRule";

class RemoveIngredientByIdRequestValidator extends RequestValidator {
    get guards () {
        return [
            [
                new LoggedGuard()
            ]
        ];
    }

    get rules () {
        return {
            id: [new RequiredRule()]
        }
    }
}

export default RemoveIngredientByIdRequestValidator;