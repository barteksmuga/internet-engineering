const Exception = require('../Abstracts/Exception');

class NotFoundException extends Exception {
    constructor (errorKey, status) {
        super('resourceNotFound', 404);
    }
}