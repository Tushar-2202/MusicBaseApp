import {
  LogoutAction,
  RememberUserCredentialsAction,
  TokenAction,
  UserAction,
} from './redux-interface';

export const SET_TOKEN = 'SET_TOKEN';
export const SET_USER = 'SET_USER';
export const REMEMBER_USER_CREDENTIALS = 'REMEMBER_USER_CREDENTIALS';

export type ActionTypes =
  | UserAction
  | TokenAction
  | RememberUserCredentialsAction
  | LogoutAction;
