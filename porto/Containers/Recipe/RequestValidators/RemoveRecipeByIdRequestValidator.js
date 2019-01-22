import RequestValidator from '~/porto/Ship/Abstracts/RequestValidator';
import LoggedGuard from '~/porto/Ship/Guards/LoggedGuard';
import RequiredRule from "~/porto/Ship/Rules/RequiredRule";
import HasPermissionGuard from "~/porto/Ship/Guards/HasPermissionGuard";
import ExistsRule from "~/porto/Ship/Rules/ExistsRule";

class RemoveRecipeByIdRequestValidator extends RequestValidator {
    get guards () {
        return [
            [
                new LoggedGuard(),
                new HasPermissionGuard({
                    permission: 'recipes@delete'
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

export default RemoveRecipeByIdRequestValidator;