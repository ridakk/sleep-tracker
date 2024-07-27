import { Router } from 'express';
import responseHandler from '../../middlewares/responseHandler';
import validation from '../../middlewares/validation';
import * as controller from './controller';
import { sleepCreateValidator } from './route.validators';

const router = Router();

/**
 * @swagger
 *
 * /sleeps:
 *   post:
 *     summary: create a sleep entry
 *     tags:
 *       - sleeps
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/requestBodies/Sleep'
 *     responses:
 *       200:
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SleepResponse'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       429:
 *         $ref: '#/components/responses/BusyError'
 *       500:
 *         $ref: '#/components/responses/InternalError'
 */
router.post('/sleeps', ...validation(sleepCreateValidator), responseHandler(controller.createSleepEntry));

export default router;
