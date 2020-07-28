import { Router, Request, Response } from 'express';
import { passport } from '../../modules/core/passport';
import { AppRequest } from '../../request';

const loginController = Router();

loginController.get('/auth/login', async (req: Request, res: Response) => {
  res.render('pages/auth/login.pug', {
    errors: req.flash('error'),
  });
});

loginController.post('/auth/login',
  passport.authenticate('local-login', {
    failureFlash: true,
    failureRedirect: '/auth/login',
  }),
  async (req: AppRequest, res: Response) => {
    res.redirect('/');
  }
);

export { loginController };