import Exception from '~/porto/Ship/Abstracts/Exception';

class UnauthorizedException extends Exception {
    constructor (errorKey, status, payload) {
        super(errorKey || 'unauthorized', status || 401, payload);
    }
}

export default UnauthorizedException;