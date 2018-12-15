import Exception from '~/porto/Ship/Abstracts/Exception';

class InvalidEmailException extends Exception{
    constructor (errorKey, status, payload) {
        super (errorKey || 'invalidArgument', status || 422, payload)
    }
}

export default InvalidEmailException;