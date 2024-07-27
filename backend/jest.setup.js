/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
require('jest-extended');

const sequelize = require('./sequelize/sequelize');
const sequelizeInitialize = require('./sequelize/initialize');

beforeAll(async () => {
  await sequelizeInitialize.default();
});

afterAll(async () => {
  await sequelize.default.close();

  await new Promise((resolve) => setTimeout(() => resolve(), 500).unref());
});
