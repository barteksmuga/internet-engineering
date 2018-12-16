import Exception from "~/porto/Ship/Abstracts/Exception";

class RequestValidationException extends Exception {
    constructor (payload) {
        super ('validationError', 422, payload)
    }
}

export default RequestValidationException;