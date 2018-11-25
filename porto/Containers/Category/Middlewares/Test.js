const Middleware = require('../../../Ship/Abstracts/Middleware');

class Test extends Middleware {
    handle(request, response, next) {
        console.log('test test test MIDDLEWARE!');
        next();
    }
}

module.exports = Test;