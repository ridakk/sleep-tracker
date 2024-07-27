import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../sequelize/sequelize';

export interface TypeSleepCreate {
  name: string;
  gender: string;
  duration: number;
  date: Date;
}

export interface TypeSleep extends TypeSleepCreate {
  id: number;
}

class Sleep extends Model<TypeSleep, TypeSleepCreate> {}

Sleep.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    gender: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    duration: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
    },
    sequelize,
    tableName: 'sleep',
    modelName: 'sleep',
    paranoid: true,
  },
);

export default Sleep;
