import { Application } from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import flash from 'express-flash';
import session from 'express-session';

import { passport } from '../modules/core/passport';
import { Config } from '../config';
import { responseLocals } from '../modules/core/response/response.middleware';


export default function (app: Application): void {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(flash());
  app.use(
    session({
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 3,
      },
      secret: Config.SESSION_SECRET,
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(responseLocals); // register res.locals
}
