import config from 'config';
import { Nexit, NEXIT_SHUTDOWN, NEXIT_EXIT } from 'nexit';
import logger from './logger/logger';

const shutdownDelay = config.get('next.shutdownDelay') as string;
const exitDelay = config.get('next.exitDelay') as string;

const nexit = new Nexit({
  shutdownDelay: parseInt(shutdownDelay, 10),
  exitDelay: parseInt(exitDelay, 10),
});

nexit.on(NEXIT_SHUTDOWN, (error: Error) => {
  logger.info({ error }, 'app is shutting down...');
});

nexit.on(NEXIT_EXIT, () => {
  logger.info('app is exiting...');
});

export default (app: Express.Application) => {
  nexit.on(NEXIT_SHUTDOWN, () => {
    // @ts-expect-error ignore
    app.set('isShuttingDown', true);
  });
};
