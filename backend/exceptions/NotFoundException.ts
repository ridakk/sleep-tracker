import BaseException from './BaseException';

export default class NotFoundException extends BaseException {
  constructor(details: string, extraData?: { [key: string]: unknown }) {
    super('not found', 404, details, extraData);
  }
}
