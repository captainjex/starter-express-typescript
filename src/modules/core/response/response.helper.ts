import { Response } from 'express';
import { logger } from '../logger';

export class ResponseHelper {
  public static forbidden(res: Response): void {
    res.status(403).redirect('back');
  }

  public static serverError(res: Response, error: Error): void {
    logger.error(error);
    res.status(500).send('Internal Server Error');
  }

  public static jsonRedirect(res: Response, redirectpath: string): void {
    res.json({
      redirect: redirectpath,
    });
  }
}


