import RequestValidator from '~/porto/Ship/Abstracts/RequestValidator';
import LoggedGuard from '~/porto/Ship/Guards/LoggedGuard';
import RequiredRule from "~/porto/Ship/Rules/RequiredRule";
import ExistsRule from "~/porto/Ship/Rules/ExistsRule";

class UpdateRecipeByIdRequestValidator extends RequestValidator {
    get guards () {
        return [
            [
                new LoggedGuard(),
                // new HasPermissionGuard({
                //     permission: 'recipes@update'
                // })
            ]
        ];
    }

    get rules () {
        return {
            id: [
                new RequiredRule(),
                new ExistsRule('recipes', 'id')
            ],
            name: [new RequiredRule()],
            authorId: [new RequiredRule()],
            preparingMethod: [new RequiredRule()],
            ingredients: [],
            categories: []
        }
    }
}

export default UpdateRecipeByIdRequestValidator;