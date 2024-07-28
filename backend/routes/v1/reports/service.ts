import * as sleepAdapter from '../sleeps/adapter';

const getSleepDurationOfLastSevenDays = () => {
  return sleepAdapter.getSleepDurationOfLastSevenDays();
};

const getEntryCountsPerName = () => {
  return sleepAdapter.getEntryCountsPerName();
};

export { getSleepDurationOfLastSevenDays, getEntryCountsPerName };
