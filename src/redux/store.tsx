import {legacy_createStore as createStore, Store, AnyAction} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

// Define the store type
export type RootState = ReturnType<typeof persistedReducer>;

// Create the store with the persisted reducer
export const store: Store<RootState, AnyAction> = createStore(persistedReducer);
// export const store = createStore(persistedReducer);

export const persistor = persistStore(store, null, () => {
  console.log('rehydrated');
});
