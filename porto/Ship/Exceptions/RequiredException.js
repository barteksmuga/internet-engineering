import Exception from '~/porto/Ship/Abstracts/Exception';

class RequiredException extends Exception{
    constructor (errorKey, status, payload) {
        super (errorKey || 'missingRequiredField', status || 422, payload)
    }
}

export default RequiredException;