import { NextFunction, Response, Request } from 'express';
import { ConnectionError, TimeoutError } from 'sequelize';
import BaseException from '../../exceptions/BaseException';
import logger from '../../utils/logger/logger';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (error: BaseException, req: Request, res: Response, next: NextFunction) => {
  logger.error({ error }, 'request failed with error');
  let { status = 500 } = error;
  let { message: title, name: type, details, extraData } = error;
  const { originalUrl: instance, method } = req;

  if (error instanceof ConnectionError || error instanceof TimeoutError) {
    status = 429;
  }

  if (status === 500) {
    title = 'Internal Server Error';
    details = 'The server was unable to complete your request';
    extraData = {};
    type = 'InternalServerError';
  }

  // we are generating error response object as per `Problem Details for HTTP APIs` spec,
  // with one exception of `type` field being a string instead of an URI.
  // for more details see: https://tools.ietf.org/html/rfc7807

  res.status(status).json({
    type,
    title,
    status,
    details,
    instance,
    method,
    ...extraData,
  });
};
