import { Application } from 'express';
import { homeController } from '../controllers/home.controller';
import { authController } from '../controllers/auth/auth.controller';


export default function (app: Application): void {
  app.use(authController);
  app.use(homeController);
}
