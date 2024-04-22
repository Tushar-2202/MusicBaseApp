import {createSlice, createAction, PayloadAction} from '@reduxjs/toolkit';

import {language} from '../locales';

/* Call this action to log out */
export const logout = createAction('LOGOUT');

interface InitialState {
  user: object;
  token: string;
  credential: any;
  languageValue: object;
  languageCode: string;
}
/* Initial state for the application */
const initialState: InitialState = {
  user: {},
  token: '',
  credential: null,
  languageValue: language.en,
  languageCode: 'en',
};

/*  Slice for the application state */
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    rememberUserCredentials: (state, action: PayloadAction) => {
      state.credential = action.payload;
    },
    changeLanguage: (state, action: PayloadAction<object>) => {
      state.languageValue = action.payload;
    },
    setLanguageCode: (state, action: PayloadAction<string>) => {
      state.languageCode = action.payload;
    },
    rehydrate: (state, action: PayloadAction<InitialState>) => ({
      ...state,
      ...action.payload,
    }),
  },
  /* Extra reducer for handling logout */
  extraReducers: builder => builder.addCase(logout, () => initialState),
});

export const {
  setUser,
  setToken,
  rememberUserCredentials,
  changeLanguage,
  setLanguageCode,
  rehydrate,
} = appSlice.actions;

export default appSlice.reducer;
