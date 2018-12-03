import Rule from "~/porto/Ship/Abstracts/Rule";
import RequiredException from "~/porto/Ship/Exceptions/RequiredException";

class RequiredRule extends Rule {

    constructor () {
        super();
        this.defaultException = RequiredException;
    }

    check (fieldName, params) {
        if (!params[fieldName] || params[fieldName].length === 0) {
            return false;
        }
        return true;
    }
}

export default RequiredRule;