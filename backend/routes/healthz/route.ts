import { Router } from 'express';

import ServiceUnavailableException from '../../exceptions/ServiceUnavailableException';
import responseHandler from '../middlewares/responseHandler';

const router = Router();

export default (app: Express.Application) => {
  /**
   * @swagger
   * /healthz:
   *   get:
   *     description: health check route
   *     tags:
   *       - health
   *     responses:
   *       200:
   *         description: service is healthy
   *       503:
   *         description: service is unhealthy
   */
  router.get(
    '/healthz',
    responseHandler(() => {
      // @ts-expect-error ignore
      const isShuttingDown = app.get('isShuttingDown');

      if (isShuttingDown) {
        throw new ServiceUnavailableException('application is shutting down');
      }
    }),
  );

  return router;
};
