import Guard from '~/porto/Ship/Abstracts/Guard';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import Porto from '~/porto/Ship/Porto';

class LoggedGuard extends Guard {
    check (request) {
        let publicKey = fs.readFileSync(path.resolve(Porto.rootDirectory, '.jwt-public.pem'), 'utf8');
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

export default LoggedGuard;