import BaseException from './BaseException';

export default class BadRequestException extends BaseException {
  constructor(details: string, extraData?: { [key: string]: unknown }) {
    super('Bad request', 400, details, extraData);
  }
}
