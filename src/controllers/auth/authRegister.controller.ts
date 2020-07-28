import { Router, Request, Response } from 'express';
import { passport } from '../../modules/core/passport';
import { AppRequest } from '../../request';

const registerController = Router();

registerController.get('/auth/register', async (req: Request, res: Response) => {
  res.render('pages/auth/register', {
    errors: req.flash('error'),
  });
});

registerController.post('/auth/register',
  passport.authenticate('local-register', {
    failureFlash: true,
    failureRedirect: '/auth/register',
  }),
  async (req: AppRequest, res: Response) => {
    res.render('pages/auth/register-success', {
      email: req.user.email,
    });
  }
);

export { registerController };