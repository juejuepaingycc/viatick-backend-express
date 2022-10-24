require('dotenv').config();

module.exports = {
    development: {
        // username: process.env.PROD_DB_USERNAME,
        // password: process.env.PROD_DB_PASSWORD,
        // database: process.env.PROD_DB_DATABASE,
        // host: process.env.PROD_DB_HOST,
        // dialect: 'mysql',
        username: process.env.DEV_DB_USERNAME,
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_DATABASE,
        host: process.env.DEV_DB_HOST,
        dialect: 'mysql',
    },
    production: {
        use_env_variable: process.env.DATABASE_URL,
        // username: process.env.PROD_DB_USERNAME,
        // password: process.env.PROD_DB_PASSWORD,
        // database: process.env.PROD_DB_DATABASE,
        // host: process.env.PROD_DB_HOST,
        dialect: 'mysql',
    },
};


