import { Router } from 'express';

const homeController = Router();

homeController.get('/', (req, res) => {
  res.render('pages/home.pug');
});

export { homeController };
