import { Request } from 'express';
import * as sleepService from './service';

const createSleepEntry = (req: Request) => {
  return sleepService.createSleepEntry(req.body);
};

// eslint-disable-next-line import/prefer-default-export
export { createSleepEntry };
