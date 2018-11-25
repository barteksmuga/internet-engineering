class RequestValidator {
    process (request) {
        this.request = request;
        this.validatedParams = Object.assign({}, this.request.params, this.request.query);
        this.authorize();
        this.validate();
    }

    authorize () {
        //todo
    }

    validate () {
    }

    getValidatedDataObject () {
        return this.validatedParams;
    }
}

module.exports = RequestValidator;