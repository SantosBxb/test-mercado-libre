import { LogDetails, Logger } from '../types/logger.types';

/**
 * Creates a logger with `details` and `error` methods for logging messages.
 * @returns {Logger} An object with `details` and `error` methods for logging.
 */
const createLogger = (): Logger => ({
  info: (message: string, details?: LogDetails) => {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`, details);
  },

  error: (message: string, details?: LogDetails) => {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, details);
  },
});

const log = createLogger();

export default log;
