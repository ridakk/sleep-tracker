import { Router } from 'express';
import SleepRoute from './sleeps/route';
import ReportsRoute from './reports/route';

const router = Router();

router.use('/v1', SleepRoute);
router.use('/v1', ReportsRoute);

export default router;
