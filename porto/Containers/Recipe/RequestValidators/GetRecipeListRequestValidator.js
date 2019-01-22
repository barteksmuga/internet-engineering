import RequestValidator from '~/porto/Ship/Abstracts/RequestValidator';
import LoggedGuard from '~/porto/Ship/Guards/LoggedGuard';
import HasPermissionGuard from "~/porto/Ship/Guards/HasPermissionGuard";

class GetRecipeListRequestValidator extends RequestValidator {
    get guards () {
        return [
            [
                new LoggedGuard(),
                new HasPermissionGuard({
                    permission: 'recipes@read'
                })
            ]
        ];
    }
}

export default GetRecipeListRequestValidator;