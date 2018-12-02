import Middleware from '~/porto/Ship/Abstracts/Middleware';

class Test extends Middleware {
    handle(request, response, next) {
        console.log('test test test MIDDLEWARE!');
        next();
    }
}

export default Test;