export default class BaseException extends Error {
  details: string;

  status: number;

  extraData?: { [key: string]: unknown };

  constructor(message: string, status: number, details: string, extraData?: { [key: string]: unknown }) {
    super(message);

    this.name = this.constructor.name;
    this.details = details;
    this.status = status;
    this.extraData = extraData;

    Error.captureStackTrace(this, this.constructor);
  }
}
