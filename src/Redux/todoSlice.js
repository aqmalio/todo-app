import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const getTodosFromApi = createAsyncThunk('todos/api',
  async () => {
    const res = await fetch('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
    if (res.ok) {
      const todos = await res.json()
      return todos
    }
  }
)

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        status: 0,
        createdAt: moment().format('YYYY-MM-DD HH:mm')
      })
    },
    updateTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === parseInt(action.payload.id))
      state[index].title = action.payload.title
      state[index].description = action.payload.description
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== parseInt(action.payload.id));
    },
    toggleStatus: (state, action) => {
      const index = state.findIndex((todo) => todo.id === parseInt(action.payload.id))
      state[index].status = action.payload.status
    }
  },
  extraReducers: {
    [getTodosFromApi.fulfilled]: (state, action) => {
      return action.payload 
    }
  }
})

export const { addTodo, toggleStatus, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;