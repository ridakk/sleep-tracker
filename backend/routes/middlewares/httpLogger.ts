import pinoHttp from 'pino-http';
import logger from '../../utils/logger/logger';

export default pinoHttp({
  logger,
  autoLogging: {
    ignore: (req) => {
      if (req.url?.match(/^\/(api-docs|healthz).*/)) {
        return true;
      }

      return false;
    },
  },
});
