/**
 * Created with Cocos2d-x3.0 jsb.
 * User: lizizhen
 * Date: 2018/8/25
 * Time: 19:45
 *
 */

import * as httpStatus from 'http-status';

/**
 * @extends Error
 */
export default class ExtendableError extends Error {
  public isPublic: boolean;
  public status: number;
  public isOperational: boolean;

  constructor(message, status: number, isPublic= false) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
    Error.captureStackTrace(this, this.constructor);
  }
}


/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class APIError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor(message, status = httpStatus.INTERNAL_SERVER_ERROR, isPublic = false) {
    super(message, status, isPublic);
  }
}

export {APIError}

