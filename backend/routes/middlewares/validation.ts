import { validationResult, ValidationChain } from 'express-validator';
import { NextFunction, Response, Request } from 'express';
import BadRequestException from '../../exceptions/BadRequestException';

export default (validators: ValidationChain[]) => {
  return [
    validators,
    (req: Request, res: Response, next: NextFunction) => {
      const result = validationResult(req);

      if (result.isEmpty()) {
        next();
        return;
      }

      next(new BadRequestException('Validation error', { errors: result.array() }));
    },
  ];
};
