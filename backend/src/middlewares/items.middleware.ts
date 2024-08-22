import { Request, Response, NextFunction } from 'express';

/**
 * Validates the presence of the 'q' query parameter.
 */
export const getItemsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.query.q) {
    return res
      .status(400)
      .json({ error: "The 'q' query parameter is required" });
  }
  next();
};
