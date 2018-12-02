import User from '~/porto/Containers/User/Models/User';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import Porto from '~/porto/Ship/Porto';

class CreateJwtTokenTask {
    /**
     * @param {User} user
     */
    run (user) {
        user = user.toJSON();
        let privateKey = fs.readFileSync(path.resolve(Porto.rootDirectory, '.jwt-private.pem'), 'utf8');
        return jwt.sign({data: user}, privateKey, {
            expiresIn: process.env.JWT_LIFESPAN,
            algorithm: process.env.JWT_ALGORITHM
        });
    }
}

export default CreateJwtTokenTask;