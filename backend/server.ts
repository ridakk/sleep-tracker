/* eslint-disable import/first */
import dotenv from 'dotenv';

dotenv.config();

import config from 'config';
import sequelizeInitialize from './sequelize/initialize';
import app from './application';
import logger from './utils/logger/logger';
import graceful from './utils/graceful';

const port = config.get('port') as number;

const listen = async () => {
  try {
    graceful(app);

    await sequelizeInitialize();
    logger.info('server initialized');
  } catch (error) {
    logger.error({ error }, 'Error while initialization');

    process.nextTick(() => {
      process.exit(1);
    });
  }

  app.listen(port, () => {
    logger.info(`App listening on the port ${port}`);
  });
};

listen();
