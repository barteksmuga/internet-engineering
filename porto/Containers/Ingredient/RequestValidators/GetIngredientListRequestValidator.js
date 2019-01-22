import RequestValidator from '~/porto/Ship/Abstracts/RequestValidator';
import LoggedGuard from '~/porto/Ship/Guards/LoggedGuard';
import HasPermissionGuard from "~/porto/Ship/Guards/HasPermissionGuard";

class GetIngredientListRequestValidator extends RequestValidator {
    get guards () {
        return [
            [
                new HasPermissionGuard({
                    permission: 'ingredients@read',
                })
            ]
        ];
    }
}

export default GetIngredientListRequestValidator;