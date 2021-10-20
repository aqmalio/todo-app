import { configureStore } from '@reduxjs/toolkit'
import modalDetailSlice from './modalDetailSlice'
import todoReducer from './todoSlice'

export default configureStore({
  reducer: {
    todos: todoReducer,
    detail: modalDetailSlice
  }
})