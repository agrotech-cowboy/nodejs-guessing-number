require('dotenv').config();

const database = {

	development: {
        environment: 'development',
        username: 'root',
        password: 'root',
        storage: 'guessing.sqlite',
        dialect: 'sqlite',
        options: {
            host: 'localhost',
            dialect: 'sqlite',
            storage: 'guessing.sqlite',
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },
            define: {
                underscored: true,
                created_at: 'created_at',
                created_at: 'updated_at'
            }
        }
	},

	production: {
        environment: 'production',
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        storage: process.env.DATABASE_NAME,
        dialect: 'sqlite',
        options: {
            dialect: 'sqlite',
            host: process.env.DATABASE_HOST,
            storage: process.env.DATABASE_NAME,
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            },
            define: {
                underscored: true,
                created_at: 'created_at',
                created_at: 'updated_at'
            }
        }
    }
}

module.exports = database[process.env.NODE_ENV || 'development'];
