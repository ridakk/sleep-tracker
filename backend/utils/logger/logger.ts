import config from 'config';
import pino from 'pino';
import errorSerializer from './serializers/error';
import packageJson from '../../package.json';

const level = config.get('logger.level') as string;
const timestamp = config.get('logger.timestamp') as boolean;
const prettyPrint = config.get('logger.prettyPrint') as boolean;

const logger = pino({
  name: packageJson.name,
  level,
  timestamp,
  serializers: {
    ...pino.stdSerializers,
    error: errorSerializer,
    err: errorSerializer,
  },
  redact: {
    paths: ['req.headers.authorization'],
    remove: true,
  },
  ...(prettyPrint
    ? {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
          },
        },
      }
    : {}),
});

export default logger;
