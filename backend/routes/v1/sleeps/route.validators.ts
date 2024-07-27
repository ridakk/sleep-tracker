import { body } from 'express-validator';

const sleepCreateValidator = [
  body('name').exists().isAlpha().isLength({ max: 250 }).trim().escape(),
  body('gender').exists().isAlpha().isLength({ max: 250 }).trim().escape(),
  body('duration').exists().isInt({ min: 0, max: 24 }),
];

// eslint-disable-next-line import/prefer-default-export
export { sleepCreateValidator };
