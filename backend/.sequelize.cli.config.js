require('dotenv').config();
const { sequelize } = require('config');

module.exports = {
  ...sequelize,
};
