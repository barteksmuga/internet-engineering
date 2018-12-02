import Exception from '~/porto/Ship/Abstracts/Exception';

class NotFoundException extends Exception {
    constructor (errorKey, status, payload) {
        super(errorKey || 'resourceNotFound', status || 404, payload);
    }
}

export default NotFoundException;