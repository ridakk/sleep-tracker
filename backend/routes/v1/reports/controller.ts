import { Request } from 'express';
import * as sleepService from './service';

const getSleepDurationOfLastSevenDays = (req: Request) => {
  return sleepService.getSleepDurationOfLastSevenDays((req.query.name as string) || '');
};

const getEntryCountsPerName = () => {
  return sleepService.getEntryCountsPerName();
};

export { getSleepDurationOfLastSevenDays, getEntryCountsPerName };
