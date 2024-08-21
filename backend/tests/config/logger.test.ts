import log from '../../src/config/logger';

describe('Logger', () => {
  let consoleInfoSpy: jest.SpyInstance;
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleInfoSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('info', () => {
    it('[SUCCESS] should log an informational message without additional details', () => {
      const message = 'Test informational message';

      log.info(message);

      expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
      expect(consoleInfoSpy).toHaveBeenCalledWith(
        expect.stringContaining('[INFO]'),
        undefined
      );
    });

    it('[SUCCESS] should log an informational message with additional details', () => {
      const message = 'Test informational message';
      const details = { key: 'value' };

      log.info(message, details);

      expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
      expect(consoleInfoSpy).toHaveBeenCalledWith(
        expect.stringContaining('[INFO]'),
        details
      );
    });
  });

  describe('error', () => {
    it('[SUCCESS] should log an error message without additional details', () => {
      const message = 'Test error message';

      log.error(message);

      expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining('[ERROR]'),
        undefined
      );
    });

    it('[SUCCESS] should log an error message with additional details', () => {
      const message = 'Test error message';
      const details = { key: 'value' };

      log.error(message, details);

      expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining('[ERROR]'),
        details
      );
    });
  });
});
