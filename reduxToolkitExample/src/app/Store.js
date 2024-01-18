import {configureStore} from '@reduxjs/toolkit'
import TodoReducer from '../features/todo/TodoSlice'

export const Store= configureStore({
    reducer: TodoReducer
});