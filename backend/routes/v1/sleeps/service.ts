import BadRequestException from '../../../exceptions/BadRequestException';
import * as sleepAdapter from './adapter';
import { TypeSleepCreate } from './model';

const createSleepEntry = async (data: TypeSleepCreate) => {
  const existing = await sleepAdapter.findOneByName(data.name);

  if (!existing) {
    return sleepAdapter.create(data);
  }

  if (existing.gender !== data.gender) {
    throw new BadRequestException('user name exists with a different gender');
  }

  const [totalSleepDuration] = await sleepAdapter.getSleepDurationOfUserForCurrentDay(data.name);

  if (totalSleepDuration.sum + data.duration > 24 || totalSleepDuration.sum === 24) {
    throw new BadRequestException(
      `total duration cannot be bigger than 24 for current day, remaining hours left: ${24 - totalSleepDuration.sum}`,
    );
  }

  return sleepAdapter.create(data);
};

// eslint-disable-next-line import/prefer-default-export
export { createSleepEntry };
