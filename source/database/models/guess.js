module.exports = (sequelize, DataTypes) => {
    const Guess = sequelize.define('Guess', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        session: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        value: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'guesses'
    });

    return Guess;
}
