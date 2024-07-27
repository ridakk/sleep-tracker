import BaseException from './BaseException';

export default class ServiceUnavailableException extends BaseException {
  constructor(details: string, extraData?: { [key: string]: unknown }) {
    super('Service unavailable', 503, details, extraData);
  }
}
