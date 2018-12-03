import Rule from "~/porto/Ship/Abstracts/Rule";
import InvalidException from "~/porto/Ship/Exceptions/InvalidException";

class IsEmailRule extends Rule {
    constructor () {
        super();
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.defaultException = InvalidException;
    }
    check (fieldName, params) {
        if (!this.emailRegex.test(params[fieldName])) {
            return false;
        }
        return true;
    }
}

export default IsEmailRule;