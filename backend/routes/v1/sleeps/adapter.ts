import SleepModel, { TypeSleep, TypeSleepCreate } from './model';

async function create(data: TypeSleepCreate): Promise<TypeSleep> {
  const result = await SleepModel.create({
    name: data.name.toLowerCase(),
    gender: data.gender.toLowerCase(),
    duration: data.duration,
    date: new Date(),
  });

  return JSON.parse(JSON.stringify(result));
}

// eslint-disable-next-line import/prefer-default-export
export { create };
