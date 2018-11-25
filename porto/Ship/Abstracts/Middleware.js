class Middleware {
    static handle (request, response, next) {
        next();
    }
}

module.exports = Middleware;