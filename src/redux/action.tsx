import {REHYDRATE} from 'redux-persist';

import {User} from 'src/utils/interfaces';
import {SET_TOKEN, SET_USER, REMEMBER_USER_CREDENTIALS} from './action-types';
import {
  LogoutAction,
  RememberUserCredentialsAction,
  TokenAction,
  UserAction,
} from './redux-interface';

const initialState = {
  user: null,
  token: null,
  credential: null,
};

const setToken = (token: string | null): TokenAction => ({
  type: SET_TOKEN,
  token,
});
const setUser = (user: User): UserAction => ({type: SET_USER, user});
const logout = (): LogoutAction => ({
  type: REHYDRATE,
  payload: initialState,
});
const rememberUserCredentials = (
  credential: string | null,
): RememberUserCredentialsAction => ({
  type: REMEMBER_USER_CREDENTIALS,
  credential,
});

export default {
  setToken,
  setUser,
  logout,
  rememberUserCredentials,
};
