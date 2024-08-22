import { NextFunction, Request, Response } from 'express';
import { getItemsMiddleware } from '../../src/middlewares/items.middleware';

describe('Middlewares: getItemsMiddleware', () => {
  let mockRequest: Request;
  let mockResponse: Partial<Response>;
  const nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {
      query: {},
    } as Request;
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  it('should call next() if the query parameter q is present', () => {
    mockRequest.query.q = 'test';

    getItemsMiddleware(mockRequest, mockResponse as Response, nextFunction);

    expect(nextFunction).toHaveBeenCalled();
  });

  it('should respond with 400 status and error message if the query parameter q is missing', () => {
    getItemsMiddleware(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({
      error: "The 'q' query parameter is required",
    });
  });
});
