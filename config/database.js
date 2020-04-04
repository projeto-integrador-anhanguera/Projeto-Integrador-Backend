module.exports = {
  local: {
    database: 'autosafe',
    username: 'postgres',
    password: 1753951,
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  development: {
    database: 'autosafe',
    username: 'postgres',
    password: 1753951,
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  test: {
    database: 'autosafe',
    username: 'postgres',
    password: 1753951,
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
}