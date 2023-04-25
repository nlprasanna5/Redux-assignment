import { configureStore } from '@reduxjs/toolkit';
// import buttonsReducer from './buttonsSlice';
import buttonsReducer from '../Features/Button/ButtonSlice'

const store = configureStore({
  reducer: {
    buttons: buttonsReducer,
  },
});

export default store;
