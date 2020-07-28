import passport from 'passport';
import bcrypt from 'bcrypt';
import { Strategy as LocalStrategy } from 'passport-local';
import { User } from '../user/user.model';


// FIXME: this is just dummy for demo this starter
const getDemoUser = async (): Promise<User> => ({
  id: 1,
  email: 'zeus@example.org',
  fullName: 'Zeus Selalu Quatt',
  password: await bcrypt.hash('1234', 256),
});


passport.serializeUser<User, unknown>((user, done) => {
  done(null, user.id);
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
passport.deserializeUser<User, any>(async (id, done) => {
  // implement get user by id, here
  console.log('deserialize user');
  getDemoUser()
    .then(user => done(null, user))
    .catch(error => done(error));
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
      // implement find user by email, here
      const user = await getDemoUser();
      if (!user) {
        throw Error('Email tidak ditemukan');
      }

      const result = bcrypt.compareSync(password, user.password);
      if (!result) {
        throw Error('Username atau password salah');
      }

      return done(null, user);
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
      // implement create new user, here
      const newUser: User = {
        id: 99,
        fullName: req.body.fullName,
        email,
        password: await bcrypt.hash(password, 256),
      };

      return done(null, newUser);
    } catch (error) {
      console.log(error);
      return done(null, false, { message: error.message });
    }
  }
));

export { passport };