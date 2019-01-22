import RequestValidator from '~/porto/Ship/Abstracts/RequestValidator';
import LoggedGuard from '~/porto/Ship/Guards/LoggedGuard';
import RequiredRule from "~/porto/Ship/Rules/RequiredRule";
import HasPermissionGuard from "~/porto/Ship/Guards/HasPermissionGuard";
import ExistsRule from "~/porto/Ship/Rules/ExistsRule";

class GetRecipeByIdRequestValidator extends RequestValidator {
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

    get rules () {
        return {
            id: [
                new RequiredRule(),
                new ExistsRule()
            ]
        }
    }
}

export default GetRecipeByIdRequestValidator;