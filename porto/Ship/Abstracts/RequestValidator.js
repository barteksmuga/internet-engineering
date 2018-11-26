const UnauthorizedException = require('../Exceptions/UnauthorizedException');

class RequestValidator {
    process (request) {
        this.request = request;
        this.validatedParams = Object.assign({}, this.request.query, this.request.params, this.request.body);
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
    }

    getValidatedDataObject () {
        return this.validatedParams;
    }

    get guards () {
        return [];
    }
}

module.exports = RequestValidator;