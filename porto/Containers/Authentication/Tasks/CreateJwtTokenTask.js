const User = require('../../User/Models/User');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

class CreateJwtTokenTask {
    /**
     * @param {User} user
     */
    run (user) {
        user = user.toJSON();
        let privateKey = fs.readFileSync(path.resolve(__dirname, '../../../../', '.jwt-private.pem'), 'utf8');
        return jwt.sign({data: user}, privateKey, {
            expiresIn: process.env.JWT_LIFESPAN,
            algorithm: process.env.JWT_ALGORITHM
        });
    }
}

module.exports = CreateJwtTokenTask;