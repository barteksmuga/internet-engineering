import Exception from '~/porto/Ship/Abstracts/Exception';

class ResourceAlreadyExistsException extends Exception{
    constructor (errorKey, status, payload) {
        super (errorKey || 'alreadyExists', status || 422, payload)
    }
}

export default ResourceAlreadyExistsException;