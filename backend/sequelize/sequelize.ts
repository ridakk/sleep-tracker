import config from 'config';
import { Sequelize } from 'sequelize';
import logger from '../utils/logger/logger';

const {
  database,
  username,
  password,
  logging,
  ...options
}: {
  database: string;
  username: string;
  password: string;
  logging: string;
} = config.get('sequelize');

logger.info(
  {
    database,
    ...options,
  },
  'sequelize connection',
);

const sequelize = new Sequelize(database, username, password, {
  ...options,
  // eslint-disable-next-line no-console
  logging: String(logging) === 'true' ? console.log : false,
});

export default sequelize;
