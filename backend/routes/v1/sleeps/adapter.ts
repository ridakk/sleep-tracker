import SleepModel, { TypeSleep, TypeSleepCreate } from './model';

async function create(data: TypeSleepCreate): Promise<TypeSleep> {
  const result = await SleepModel.create(data);

  return JSON.parse(JSON.stringify(result));
}

// eslint-disable-next-line import/prefer-default-export
export { create };
