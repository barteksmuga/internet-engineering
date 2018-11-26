const Exception = require('../Abstracts/Exception');

class NotFoundException extends Exception {
    constructor (errorKey, status, payload) {
        super(errorKey || 'resourceNotFound', status || 404, payload);
    }
}

module.exports = NotFoundException;