import { Response, NextFunction } from 'express';
import { AppRequest } from '../../request';

export const onlyAthenticated = () => (req: AppRequest, res: Response, next: NextFunction): void => {
  if (req.isAuthenticated()) {
    return next();
  }

  req.session.afterLoginUrl = req.path;
  res.redirect('/auth/login');
};