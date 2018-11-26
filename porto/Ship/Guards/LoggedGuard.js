const Guard = require('../Abstracts/Guard');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

class LoggedGuard extends Guard {
    check (request) {
        let publicKey = fs.readFileSync(path.resolve(__dirname, '../../..', '.jwt-public.pem'), 'utf8');
        let token = request.get('authorization');
        if (!token) {
            return false;
        }
        try {
            let result = jwt.verify(token, publicKey, {
                algorithm: process.env.JWT_ALGORITHM
            });
            request.user = {
                ...result.data,
                expiresAt: result.exp
            };
        } catch (error) {
            return false;
        }
        return true;
    }
}

module.exports = LoggedGuard;