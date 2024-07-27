import { body } from 'express-validator';

const sleepCreateValidator = [
  body('name', 'name is required (lowercase), min:3, max:250')
    .isLowercase()
    .isLength({ min: 3, max: 250 })
    .trim()
    .escape(),
  body('gender', 'gender is required (lowercase), max:250')
    .isLowercase()
    .isLength({ min: 3, max: 250 })
    .trim()
    .escape(),
  body('duration', 'duration is required, min: 0, max: 24').isInt({ min: 0, max: 24 }),
];

// eslint-disable-next-line import/prefer-default-export
export { sleepCreateValidator };
