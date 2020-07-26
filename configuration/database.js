require('dotenv').config();

const database = {

	development: {
        environment: 'development',
        username: 'postgres',
        password: 'root',
        database: 'guessing',
        dialect: 'postgres',
        options: {
            host: 'localhost',
            dialect: 'postgres',
            database: 'guessing',
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
        database: process.env.DATABASE_NAME,
        dialect: 'postgres',
        options: {
            dialect: 'postgres',
            host: process.env.DATABASE_HOST,
            database: process.env.DATABASE_NAME,
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
