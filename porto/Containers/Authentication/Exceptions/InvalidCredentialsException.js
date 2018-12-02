import Exception from '~/porto/Ship/Abstracts/Exception';

class InvalidCredentialsException extends Exception {
    constructor (errorKey, status, payload) {
        super('invalidCredentials', 401);
    }
}

export default InvalidCredentialsException;