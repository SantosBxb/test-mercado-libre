import { Response } from 'express';
import { AxiosError } from 'axios';
import { handleError } from '../../src/utils/errors';
import log from '../../src/config/logger';

jest.mock('../../src/config/logger');

describe('handleError', () => {
  let mockResponse: Partial<Response>;

  const errorBehavior = {
    withResponse: {
      message: 'Test error message',
      response: {
        status: 404,
        data: { message: 'Not found' },
      },
    },
    withoutResponse: {
      message: 'Test error message',
    },
  };

  beforeEach(() => {
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };
  });

  it('[SUCCESS] should log the error and return a 404 status with the error message if the error has a response', () => {
    handleError(
      mockResponse as Response,
      errorBehavior.withResponse as AxiosError,
      'test_prefix'
    );

    expect(log.error).toHaveBeenCalledWith('test_prefix_failed', {
      errorMessage: 'Test error message',
    });

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Not found' });
  });

  it('[SUCCESS] should return a 500 status with a generic error message if there is no response in the error', () => {
    handleError(
      mockResponse as Response,
      errorBehavior.withoutResponse as AxiosError,
      'test_prefix'
    );

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith({
      error: 'An error occurred while fetching data from Mercado Libre',
    });
  });

  it('[SUCCESS] should log additional info if provided', () => {
    const additionalInfo = { someKey: 'someValue' };

    handleError(
      mockResponse as Response,
      errorBehavior.withResponse as AxiosError,
      'test_prefix',
      additionalInfo
    );

    expect(log.error).toHaveBeenCalledWith('test_prefix_failed', {
      someKey: 'someValue',
      errorMessage: 'Test error message',
    });
  });
});
