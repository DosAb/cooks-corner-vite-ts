import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../slices/tokenSlice.js';
import loginReducer from '../slices/loginSlice.js'

const store = configureStore({
  reducer: {
    token: tokenReducer,
    login: loginReducer,
  },
});

export default store;