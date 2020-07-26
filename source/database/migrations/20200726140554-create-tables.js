module.exports = {

    up: async (queryInterface, DataTypes) => {

        await queryInterface.createTable('sessions', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
    
            expected: {
                type: DataTypes.INTEGER(4),
                allowNull: false
            },

            active: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            },

            created_at: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            },

            updated_at: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            }
        });

        await queryInterface.createTable('guesses', {
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
                type: DataTypes.INTEGER(4),
                allowNull: false
            },

            created_at: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            },

            updated_at: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            }
        });
    },

    down: async queryInterface => {
        await queryInterface.dropTable('sessions');
        await queryInterface.dropTable('guesses');
    }
}
