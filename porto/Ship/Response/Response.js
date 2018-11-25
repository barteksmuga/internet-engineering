class Response {
    static success (response, data, status) {
        console.log(status || 200);
        response.status(status || 200).send(data);
    }

    static error (response, exception) {
        response.status(exception.statusCode).send({
            errorKey: exception.errorKey,
            payload: exception.payload
        });
    }
}

module.exports = Response;