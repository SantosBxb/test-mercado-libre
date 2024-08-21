import { Response } from 'express';
import { AxiosError } from 'axios';
import log from '../config/logger';

/**
 * Handles errors during API requests and sends an appropriate response.
 * @param {Response} res - The Express response object.
 * @param {AxiosError<any>} error - The error object from Axios.
 * @param {string} prefix - A prefix to identify the operation in the logs.
 * @param {Record<string, any>} [info={}] - Additional information to log.
 * @returns {Response} - Returns the Express response with the appropriate status and error message.
 */
export const handleError = (
  res: Response,
  error: AxiosError<any>,
  prefix: string,
  info: Record<string, any> = {}
) => {
  log.error(`${prefix}_failed`, {
    ...info,
    errorMessage: error.message,
  });
  if (error.response) {
    return res
      .status(error.response.status)
      .json({ error: error.response.data?.message });
  }
  return res.status(500).send({
    error: 'An error occurred while fetching data from Mercado Libre',
  });
};
