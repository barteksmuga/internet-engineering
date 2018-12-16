import RequestValidator from '~/porto/Ship/Abstracts/RequestValidator';
import LoggedGuard from '~/porto/Ship/Guards/LoggedGuard';
import RequiredRule from '~/porto/Ship/Rules/RequiredRule';
import ExistsRule from '~/porto/Ship/Rules/ExistsRule';
import IsEmailRule from "../../../Ship/Rules/IsEmailRule";

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
            id: [new RequiredRule(), new ExistsRule('ingredients', 'id'), new IsEmailRule()]
        }
    }
}

export default RemoveIngredientByIdRequestValidator;