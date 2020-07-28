import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import loadControllers from './load/controllers';
import loadMiddlewares from './load/middlewares';
import { Config } from './config';
import { ResponseHelper } from './modules/core/response/response.helper';

class App {
  public app: express.Application;
  private readonly host: string = '0.0.0.0';
  private readonly port: number = Config.PORT;
  private readonly environment: string = Config.NODE_ENV;

  constructor() {
    this.app = express();
    this.setup();
    this.handleError();
  }

  private setup() {
    loadMiddlewares(this.app);
    this.app.set('views', path.join(__dirname, '../views'));
    this.app.set('view engine', 'pug');
    this.app.use('/assets', express.static('views/assets'));
    loadControllers(this.app);
  }

  private handleError() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
      ResponseHelper.serverError(res, error);
    });
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log('[ ✓ ] server started');
      console.log(`Environment: \t${this.environment}`);
      console.log(`Listening: \thttp://${this.host}:${this.port}`);
    });
  }
}

export default App;
