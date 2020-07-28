import { Sequelize } from 'sequelize-typescript';
import { Config } from '../../config';

export const sequelize = new Sequelize({
  host: Config.DB_HOST,
  port: Config.DB_PORT,
  database: Config.DB_NAME,
  username: Config.DB_USER,
  password: Config.DB_PASSWORD,
  dialect: Config.DB_ENGINE,
  logging: false,
});