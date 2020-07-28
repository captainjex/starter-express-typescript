import { Router, Request, Response } from 'express';
import { onlyAthenticated } from '../../modules/auth/auth.middleware';
import { loginController } from './authLogin.controller';
import { registerController } from './authRegister.controller';

const authController = Router();
authController.use([
  loginController,
  registerController,
]);


authController.get('/auth/logout', onlyAthenticated(), async (req: Request, res: Response) => {
  req.session.destroy((error: Error) => {
    if (error) {
      throw Error(error.message);
    }
    res.redirect('/');
  });
});

export { authController };