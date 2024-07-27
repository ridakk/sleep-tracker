import { Request } from 'express';
import * as sleepService from './service';

const createSleepEntry = (req: Request) => {
  return sleepService.createSleepEntry(req.body);
};

const getByName = () => {};

export { createSleepEntry, getByName };
