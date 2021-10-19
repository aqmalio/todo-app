import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todos',
  initialState: [{
    "id": 1,
    "title": "Make a meal",
    "description": "lorem ipsum",
    "status": 0,
    "createdAt": "2019-11-15 18:00"
  }, {
    "id": 2,
    "title": "Dinner with family",
    "description": "lorem ipsum",
    "status": 0,
    "createdAt": "2019-11-14 18:00"
  }, {
    "id": 3,
    "title": "Watch scary movie",
    "description": "lorem ipsum",
    "status": 0,
    "createdAt": "2019-11-13 13:00"
  }, {
    "id": 4,
    "title": "Learn something new",
    "description": "lorem ipsum",
    "status": 1,
    "createdAt": "2019-11-12 08:00"
  }, {
    "id": 5,
    "title": "Make a phone call to mom",
    "description": "lorem ipsum",
    "status": 1,
    "createdAt": "2019-11-11 04:00"
    }],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        "id": Date.now(),
        "title": action.payload.title,
        "description": action.payload.title,
        "status": 0,
        "createdAt": Date.now().toString()
      })
    }
  }
})

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;