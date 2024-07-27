import { NextFunction, Response, Request } from 'express';

export default (requestHandler: (req: Request, res: Response) => unknown) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      const result = await requestHandler(request, response);

      response.json({ result, status: 200 });
    } catch (e) {
      next(e);
    }
  };
};
