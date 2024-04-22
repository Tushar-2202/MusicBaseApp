import {REHYDRATE} from 'redux-persist';
import {
  ActionTypes,
  REMEMBER_USER_CREDENTIALS,
  SET_TOKEN,
  SET_USER,
} from './action-types';
import {InitialState} from './redux-interface';

const initial: InitialState = {
  user: null,
  token: null,
  credential: null,
};
const reducer = (
  state: InitialState = initial,
  action: ActionTypes,
): InitialState => {
  console.log(action.type);
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.user};
    case SET_TOKEN:
      return {...state, token: action.token};
    case REMEMBER_USER_CREDENTIALS:
      return {...state, credential: action.credential};
    case REHYDRATE:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default reducer;
