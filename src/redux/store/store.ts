import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../slices/tokenSlice.ts';
import loginReducer from '../slices/loginSlice.ts';
import profileReducer from '../slices/profileSlice.ts';

const store = configureStore({
  reducer: {
    token: tokenReducer,
    login: loginReducer,
    profileModule: profileReducer
  },
});

export default store;