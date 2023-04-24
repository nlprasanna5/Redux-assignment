import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Todo/counter'

export default configureStore({
  reducer: {
    counter: counterReducer
  },
})