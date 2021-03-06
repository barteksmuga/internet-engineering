import seq from '~/helpers/Sequelize';

const User = seq.define('users', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: seq.Sequelize.INTEGER,
        },
        name: {
            allowNull: false,
            type: seq.Sequelize.STRING
        },
        email: {
            allowNull: false,
            type: seq.Sequelize.STRING,
            unique: true
        },
        password: {
            allowNull: false,
            type:seq.Sequelize.STRING
        }
    }
);

User.prototype.toJSON = function () {
    let result = Object.assign({}, this.get());
    delete result.password;
    return result;
};

User.sync();

export default User;