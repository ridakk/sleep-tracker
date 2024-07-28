import * as sleepService from './service';

const getSleepDurationOfLastSevenDays = () => {
  return sleepService.getSleepDurationOfLastSevenDays();
};

const getEntryCountsPerName = () => {
  return sleepService.getEntryCountsPerName();
};

export { getSleepDurationOfLastSevenDays, getEntryCountsPerName };
