module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('sessions', [
            {
                expected: 157,
                active: true,
                created_at: new Date(),
                updated_at: new Date()
            }
        ]);
    },

    down: async (queryInterface) => {
        await queryInterface.bulkDelete('sessions', null);
    }
};
