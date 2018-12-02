class Exception {
    constructor (errorKey, status, payload) {
        this.errorKey = errorKey || '';
        this.status = status || 500;
        this.payload = payload || {};
    }
}

export default Exception;