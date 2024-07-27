import * as sleepAdapter from './adapter';
import { TypeSleepCreate } from './model';

const createSleepEntry = (data: TypeSleepCreate) => {
  return sleepAdapter.create(data);
};

// eslint-disable-next-line import/prefer-default-export
export { createSleepEntry };
