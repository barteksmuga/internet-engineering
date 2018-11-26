const Exception = require('../Abstracts/Exception');

class UnauthorizedException extends Exception {
    constructor (errorKey, status, payload) {
        super(errorKey || 'unauthorized', status || 401, payload);
    }
}

module.exports = UnauthorizedException;