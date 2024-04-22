import {REHYDRATE} from 'redux-persist';
import {
  REMEMBER_USER_CREDENTIALS,
  SET_TOKEN,
  SET_USER,
} from 'src/redux/action-types';
import {User} from 'src/utils/interfaces';

const initialState = {
  user: null,
  token: null,
  credential: null,
};

export interface InitialState {
  user: User | null; // Replace with actual user type
  token: string | null;
  credential: string | null; // Replace with actual credential type
}

// Redux Interface
export interface UserAction {
  type: typeof SET_USER;
  user: User; // Replace with actual user type
}

export interface TokenAction {
  type: typeof SET_TOKEN;
  token: string | null;
}

export interface RememberUserCredentialsAction {
  type: typeof REMEMBER_USER_CREDENTIALS;
  credential: string | null; // Replace with actual credential type
}

export interface LogoutAction {
  type: typeof REHYDRATE;
  payload: typeof initialState;
}
