class RequestValidator {
    process (request) {
        this.request = request;
        this.validatedParams = Object.assign({}, this.request.query, this.request.params, this.request.body);
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