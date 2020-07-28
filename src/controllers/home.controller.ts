import { Router } from 'express';

const homeController = Router();

homeController.get('/', (req, res) => {
  console.log(req.user);
  res.render('pages/home.pug');
});

export { homeController };
