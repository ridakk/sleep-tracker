import { NextFunction, Response, Request } from 'express';
import { isNil } from 'lodash';

export default (requestHandler: (req: Request, res: Response) => unknown) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      const result = await requestHandler(request, response);

      response.json({ ...(!isNil(result) && { result }), status: 200 });
    } catch (e) {
      next(e);
    }
  };
};
