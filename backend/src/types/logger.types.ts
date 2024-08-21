/** Additional details to be logged. */
export interface LogDetails {
  [key: string]: any;
}

/** Logger with methods for logging informational and error messages. */
export type Logger = {
  /**
   * Logs an informational message with optional details.
   * @param {string} message - The message to log.
   * @param {LogDetails} [details] - Optional additional information to log.
   */
  info: (message: string, details?: LogDetails) => void;

  /**
   * Logs an error message with optional details.
   * @param {string} message - The message to log.
   * @param {LogDetails} [details] - Optional additional information to log.
   */
  error: (message: string, details?: LogDetails) => void;
};
