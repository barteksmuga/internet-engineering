class Response {
    static success (response, data, status) {
        response.status(status || 200).send(data);
    }

    static error (response, exception) {
        response.status(exception.status).send({
            errorKey: exception.errorKey,
            payload: exception.payload
        });
    }
}

export default Response;