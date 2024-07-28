import { Model, DataTypes } from 'sequelize';
import sequelize from '../../../sequelize/sequelize';

export type TypeSleepName = string;
export type TypeSleepDate = Date;

export interface TypeSleepCreate {
  name: TypeSleepName;
  gender: string;
  duration: number;
  date: TypeSleepDate;
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
      type: DataTypes.DATEONLY,
    },
  },
  {
    indexes: [
      {
        fields: ['name'],
      },
      {
        fields: ['name', 'date'],
      },
    ],
    sequelize,
    tableName: 'sleep',
    modelName: 'sleep',
    paranoid: false,
  },
);

export default Sleep;
