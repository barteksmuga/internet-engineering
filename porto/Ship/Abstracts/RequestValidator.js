import UnauthorizedException from '~/porto/Ship/Exceptions/UnauthorizedException';

class RequestValidator {
    process (request) {
        this.request = request;
        this.validatedParams = {};
        this.authorize();
        this.validate();
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
        let params = Object.assign({}, this.request.query, this.request.params, this.request.body);
        Object.entries(this.rules).forEach(([fieldName, rules]) => {
            rules.forEach(rule => {
                if (rule.rule) {
                    this.validateFieldWithCustomException(rule.rule, fieldName, params, rule.exception);
                } else {
                    this.validateFieldWithDefaultException(rule, fieldName, params);
                }
            });
            this.validatedParams[fieldName] = params[fieldName];
        });
    }

    getValidatedDataObject () {
        return this.validatedParams;
    }

    get guards () {
        return [];
    }

    get rules () {
        return {};
    }

    validateFieldWithDefaultException (rule, fieldName, params) {
        if (!rule.check(fieldName, params)) {
            throw new rule.defaultException();
        }
    }

    validateFieldWithCustomException (rule, fieldName, params, exception) {
        if (!rule.check(fieldName, params)) {
            throw new exception.class(exception.message, exception.status || 422, exception.payload || '');
        }
    }
}

export default RequestValidator;