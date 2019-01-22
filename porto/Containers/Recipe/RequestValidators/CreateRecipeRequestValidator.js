import RequestValidator from '~/porto/Ship/Abstracts/RequestValidator';
import LoggedGuard from '~/porto/Ship/Guards/LoggedGuard';
import RequiredRule from '~/porto/Ship/Rules/RequiredRule';
import HasPermissionGuard from "~/porto/Ship/Guards/HasPermissionGuard";

class CreateRecipeRequestValidator extends RequestValidator {
    get guards () {
        return [
            [
                new LoggedGuard(),
                // new HasPermissionGuard({
                //     permission: 'recipes@create'
                // })
            ]
        ];
    }

    get rules () {
        return {
            name: [new RequiredRule()],
            authorId: [new RequiredRule()],
            preparingMethod: [new RequiredRule()],
            ingredients: [],
            categories: []
        }
    }
}

export default CreateRecipeRequestValidator;