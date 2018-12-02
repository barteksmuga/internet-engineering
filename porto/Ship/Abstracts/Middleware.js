class Middleware {
    static handle (request, response, next) {
        next();
    }
}

export default Middleware;