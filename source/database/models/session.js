const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    const Session = sequelize.define('Session', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        expected: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        tableName: 'sessions'
    });

    // Obter um token de autenticação
    Session.prototype.generateToken = function() {
        return jwt.sign({ id: this.id }, process.env.JWT_SECRET);
    }

    return Session;
}
