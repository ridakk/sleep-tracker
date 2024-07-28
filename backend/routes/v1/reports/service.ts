import { sub, format } from 'date-fns';
import { groupBy } from 'lodash';
import * as sleepAdapter from '../sleeps/adapter';

const getSleepDurationOfLastSevenDays = async (name: string) => {
  const userResults = await sleepAdapter.getSleepDurationOfLastSevenDays(name);
  const userResultsGroupedByDate = groupBy(userResults, 'date');
  const currentDate = new Date();

  const combined = [0, 1, 2, 3, 4, 5, 6]
    .map((index) => format(sub(currentDate, { days: index }), 'yyyy-MM-dd'))
    .map((targetDate) => {
      const [resultAtDate] = userResultsGroupedByDate[targetDate] || [];

      return (
        resultAtDate || {
          name,
          date: targetDate,
          sum: 0,
        }
      );
    });

  return combined;
};

const getEntryCountsPerName = () => {
  return sleepAdapter.getEntryCountsPerName();
};

export { getSleepDurationOfLastSevenDays, getEntryCountsPerName };
