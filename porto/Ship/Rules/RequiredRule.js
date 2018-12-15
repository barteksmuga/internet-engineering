import Rule from "~/porto/Ship/Abstracts/Rule";
import RequiredException from "~/porto/Ship/Exceptions/RequiredException";
import {isSet} from "~/porto/Ship/Helpers/IsSet";

class RequiredRule extends Rule {
    constructor () {
        super();
        this.defaultException = RequiredException;
    }

    async check (fieldName, requestParams) {
        return isSet(requestParams[fieldName]);
    }
}

export default RequiredRule;