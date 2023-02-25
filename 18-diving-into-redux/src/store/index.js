import authSlice from './auth';
import counterSlice from './counter';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: { 
    counter : counterSlice,
    auth: authSlice,
  },
});

export default store;