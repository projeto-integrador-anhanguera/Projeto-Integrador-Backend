const envLocal = {
    database: 'autosafe',
    username: 'postgres',
    password: 'postgres',
    host: '127.0.0.1',
    dialect: 'postgres'
};

const envProd = {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
}

module.exports = {
    envLocal,
    envProd
};