/* eslint-disable import/no-extraneous-dependencies */
import * as matchers from 'jest-extended';

require('dotenv').config();

expect.extend(matchers);

const sequelize = require('./sequelize/sequelize');
const sequelizeInitialize = require('./sequelize/initialize');

beforeAll(async () => {
  await sequelizeInitialize.default();
});

afterAll(async () => {
  await sequelize.default.close();

  // eslint-disable-next-line no-promise-executor-return
  await new Promise((resolve) => setTimeout(() => resolve(), 500).unref());
});
