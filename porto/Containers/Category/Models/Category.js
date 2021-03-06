import seq from '~/helpers/Sequelize';

const Category = seq.define('categories', {
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
    }
);

Category.sync();

export default Category;