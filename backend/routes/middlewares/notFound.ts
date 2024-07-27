import { NextFunction, Response, Request } from 'express';
import NotFoundException from '../../exceptions/NotFoundException';

export default (req: Request, res: Response, next: NextFunction) => {
  const { method, path } = req;

  next(new NotFoundException('url does not exists', { method, path }));
};
