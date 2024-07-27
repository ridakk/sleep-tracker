import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../sequelize/sequelize';

export interface TypeSleepCreate {
  name: string;
  gender: string;
  duration: number;
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
  },
  {
    defaultScope: {
      attributes: { exclude: ['updatedAt', 'deletedAt'] },
    },
    sequelize,
    tableName: 'sleep',
    modelName: 'sleep',
    paranoid: true,
  },
);

export default Sleep;
