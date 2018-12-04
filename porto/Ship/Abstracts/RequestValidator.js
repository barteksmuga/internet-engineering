import UnauthorizedException from '~/porto/Ship/Exceptions/UnauthorizedException';

class RequestValidator {
    process (request) {
        this.request = request;
        this.validatedParams = {};
        this.authorize();
        return this.validate();
    }

    authorize () {
        if (this.guards.length === 0) {
            return;
        }
        let passed = false;
        this.guards.forEach(guardGroup => {
            let checks = [];
            guardGroup.forEach(guard => {
                checks.push(guard.check(this.request));
            });
            if (checks.indexOf(false) === -1) {
                passed = true;
            }
        });
        if (!passed) {
            throw new UnauthorizedException();
        }
    }

    validate () {
        if (this.rules.length === 0) {
            return;
        }
        let requestParams = Object.assign({}, this.request.query, this.request.params, this.request.body);
        let promises = [];
        Object.entries(this.rules).forEach(([fieldName, rules]) => {
            rules.forEach(rule => {
                if (rule.rule) {
                    promises.push(this.validateFieldWithCustomException(rule.rule, fieldName, requestParams, rule.exception));
                } else {
                    promises.push(this.validateFieldWithDefaultException(rule, fieldName, requestParams));
                }
            });
            this.validatedParams[fieldName] = requestParams[fieldName];
        });
        return Promise.all(promises);
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

    validateFieldWithDefaultException (rule, fieldName, requestParams) {
        return rule.check(fieldName, requestParams).catch(() => {
            throw new rule.defaultException();
        });
    }

    validateFieldWithCustomException (rule, fieldName, requestParams, exceptionData) {
        return rule.check(fieldName, requestParams).catch(() => {
            throw new exceptionData.class(exceptionData.message, exceptionData.status || 422, exceptionData.payload || '');
        });
    }
}

export default RequestValidator;