import sequelize from './sequelize';

export default async () => {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });
};
