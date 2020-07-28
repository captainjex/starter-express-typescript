import { Request } from 'express';
import { User } from './modules/user/user.model';

export interface AppRequest extends Request {
  user: User, // set by passport
}
