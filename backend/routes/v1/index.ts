import { Router } from 'express';
import SleepRoute from './sleeps/route';

const router = Router();

router.use('/v1/sleeps', SleepRoute);

export default router;
