// https://github.com/sequelize/sequelize/issues/3781
// eslint-disable-next-line import/newline-after-import

import config from 'config';
import Sequelize from 'sequelize';
import logger from '../utils/logger/logger';

// workaround to string-returning decimal values of Sequelize
// https://github.com/sequelize/sequelize/issues/8019#issuecomment-384316346
Sequelize.postgres.DECIMAL.parse = (value) => parseFloat(value);

const { database, username, password, logging, ...options } = config.get('sequelize');

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
