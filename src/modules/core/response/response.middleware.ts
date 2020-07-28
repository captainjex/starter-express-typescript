import { NextFunction, Request, Response } from 'express';

export function responseLocals(req: Request, res: Response, next: NextFunction): void {
  res.locals.user = req.user;
  next();
}