import { Router } from 'express';
import responseHandler from '../../middlewares/responseHandler';
import * as controller from './controller';

const router = Router();

/**
 * @swagger
 *
 * /v1/reports/weekly:
 *   get:
 *     summary: get sleep durations for last 7 days
 *     tags:
 *       - reports
 *     parameters:
 *       - $ref: '#/components/parameters/NameQueryParam'
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SleepWeeklyDurationResponse'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       429:
 *         $ref: '#/components/responses/BusyError'
 *       500:
 *         $ref: '#/components/responses/InternalError'
 */
router.get('/reports/weekly', responseHandler(controller.getSleepDurationOfLastSevenDays));

/**
 * @swagger
 *
 * /v1/reports/counts:
 *   get:
 *     summary: get sleep entry counts for name
 *     tags:
 *       - reports
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SleepCountResponse'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       429:
 *         $ref: '#/components/responses/BusyError'
 *       500:
 *         $ref: '#/components/responses/InternalError'
 */
router.get('/reports/counts', responseHandler(controller.getEntryCountsPerName));

export default router;
