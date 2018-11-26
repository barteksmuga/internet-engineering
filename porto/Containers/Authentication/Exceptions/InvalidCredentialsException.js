const Exception = require('../../../Ship/Abstracts/Exception');

class InvalidCredentialsException extends Exception {
    constructor (errorKey, status, payload) {
        super('invalidCredentials', 401);
    }
}

module.exports = InvalidCredentialsException;