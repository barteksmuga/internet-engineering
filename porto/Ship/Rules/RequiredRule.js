import Rule from "~/porto/Ship/Abstracts/Rule";
import RequiredException from "~/porto/Ship/Exceptions/RequiredException";

class RequiredRule extends Rule {
    constructor () {
        super();
        this.defaultException = RequiredException;
    }

    check (fieldName, requestParams) {
        return new Promise((resolve, reject) => {
            if (!requestParams[fieldName] || requestParams[fieldName].length === 0) {
                reject();
            }
            resolve();
        });
    }
}

export default RequiredRule;