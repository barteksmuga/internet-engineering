import UnauthorizedException from '~/porto/Ship/Exceptions/UnauthorizedException';
import RequestValidationException from '~/porto/Ship/Exceptions/RequestValidationException';

class RequestValidator {
    async process (request) {
        this.request = request;
        this.validatedParams = {};
        await this.authorize();
        await this.validate();
    }

    async authorize () {
        if (this.guards.length === 0) {
            return;
        }
        let passed = false;
        for (let i = 0; i < this.guards.length; ++i) {
            let checks = [];
            for (let j = 0; j < this.guards[i].length; ++j) {
                checks.push(await this.guards[i][j].check(this.request));
            }
            if (checks.indexOf(false) === -1) {
                passed = true;
                break;
            }
        }
        if (!passed) {
            throw new UnauthorizedException();
        }
    }

    async validate () {
        if (this.rules.length === 0) {
            return;
        }
        let requestParams = Object.assign({}, this.request.query, this.request.params, this.request.body);
        let exceptions = {};
        let firstException, singleError = false, failure = false;
        for (let field in this.rules) {
            if (!exceptions[field]) {
                exceptions[field] = [];
            }
            for (let rule of this.rules[field]) {
                try {
                    await this.constructor.validateField(rule, field, requestParams);
                } catch (exception) {
                    failure = true;
                    exceptions[field].push(exception.errorKey);
                    if (firstException) {
                        singleError = false;
                    } else {
                        firstException = exception;
                        singleError = true;
                    }
                }
            }
            this.validatedParams[field] = requestParams[field];
        }
        if (singleError) {
            throw firstException;
        }
        if (failure) {
            throw new RequestValidationException(exceptions);
        }
    }

    get validatedDataObject () {
        return this.validatedParams;
    }

    get guards () {
        return [];
    }

    get rules () {
        return {};
    }

    static async validateField (rule, fieldName, requestParams) {
        let check;
        if (rule.rule) {
            check = await rule.rule.check(fieldName, requestParams);
        } else {
            check = await rule.check(fieldName, requestParams);
        }
        if (!check) {
            if (rule.rule) {
                throw new rule.exception.class(rule.exception.message, rule.exception.status || 422, rule.exception.payload || {});
            }
            throw new rule.defaultException();
        }
    }
}

export default RequestValidator;