import passport from 'passport';
import bcrypt from 'bcrypt';
import { Strategy as LocalStrategy } from 'passport-local';
import { User } from '../user/user.model';

const demoUser: User = {
  id: 1,
  email: 'zeus@example.org',
  fullName: 'Zeus Selalu Quatt',
};

passport.serializeUser<User, unknown>((user, done) => {
  done(null, user.id);
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
passport.deserializeUser<User, any>((id, done) => {
  done(null, demoUser);
});

passport.use('local-login', new LocalStrategy(
  {
    passReqToCallback: true,
    passwordField: 'password',
    session: true,
    usernameField: 'email',
  },
  async (req, email, password, done) => {
    try {
      // logic login come here and return the logged in user
      return done(null, demoUser);
    } catch (error) {
      console.log(error);
      return done(null, false, { message: error.message });
    }
  },
));

passport.use('local-register', new LocalStrategy(
  {
    passReqToCallback: true,
    passwordField: 'password',
    session: true,
    usernameField: 'email',
  },
  async (req, email, password, done) => {
    try {
      // logic register come here and return the new created user
      const userpassword = await bcrypt.hash(password, 256);

      return done(null, demoUser);
    } catch (error) {
      console.log(error);
      return done(null, false, { message: error.message });
    }
  }
));

export { passport };