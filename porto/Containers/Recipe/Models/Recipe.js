import seq from '~/helpers/Sequelize';

const Recipe = seq.define('recipes', {
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
        authorId: {
            allowNull: false,
            type: seq.Sequelize.INTEGER
        },
        preparingMethod: {
            allowNull: false,
            type: seq.Sequelize.TEXT
        }
    }
);

Recipe.sync();

export default Recipe;