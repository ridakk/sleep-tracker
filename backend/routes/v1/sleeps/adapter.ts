import { QueryTypes } from 'sequelize';
import SleepModel, { TypeSleep, TypeSleepCreate, TypeSleepDate, TypeSleepName } from './model';
import sequelize from '../../../sequelize/sequelize';

const create = async (data: TypeSleepCreate): Promise<TypeSleep> => {
  const result = await SleepModel.create({
    name: data.name.toLowerCase(),
    gender: data.gender.toLowerCase(),
    duration: data.duration,
    date: new Date(),
  });

  return JSON.parse(JSON.stringify(result));
};

const getSleepDurationOfLastSevenDays = (
  name: string,
): Promise<
  {
    name: TypeSleepName;
    date: TypeSleepDate;
    sum: number;
  }[]
> => {
  const query = `
    SELECT s.name, s.date, sum(s.duration)::int FROM sleep s 
    WHERE s.name = '${name.toLowerCase()}' AND s.date > current_date - INTERVAL '7 days'
    GROUP BY s."date", s."name"
  `;

  return sequelize.query(query, { type: QueryTypes.SELECT });
};

const getEntryCountsPerName = (): Promise<
  {
    name: TypeSleepName;
    count: number;
  }[]
> => {
  const query = `
    SELECT s.name, s.gender, Count(*)::int FROM sleep s
    GROUP BY s."name", s.gender
  `;

  return sequelize.query(query, { type: QueryTypes.SELECT });
};

export { create, getSleepDurationOfLastSevenDays, getEntryCountsPerName };
