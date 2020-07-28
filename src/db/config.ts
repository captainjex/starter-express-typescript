import { Config } from '../config';

module.exports = {
  development: {
    host: Config.DB_HOST,
    port: Config.DB_PORT,
    username: Config.DB_USER,
    password: Config.DB_PASSWORD,
    database: Config.DB_NAME,
    dialect: Config.DB_ENGINE || 'mysql',
  },
};