import Rule from "~/porto/Ship/Abstracts/Rule";
import InvalidEmailException from "~/porto/Ship/Exceptions/InvalidEmailException";

class IsEmailRule extends Rule {
    constructor () {
        super();
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.defaultException = InvalidEmailException;
    }

    async check (fieldName, requestParams) {
        return this.emailRegex.test(requestParams[fieldName]);
    }
}

export default IsEmailRule;