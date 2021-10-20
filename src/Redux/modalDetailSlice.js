import { createSlice } from "@reduxjs/toolkit";

const modalDetailSlice = createSlice({
  name: 'detail',
  initialState: {
    id: null,
    title: null,
    description: null,
    status: null,
    createdAt: null,
    openModal: false
},
  reducers: {
    changeDetail: (state, action) => {
      return {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        status: action.payload.status,
        createdAt: action.payload.createdAt,
        openModal: action.payload.openModal
      }
    },
  }
})

export const { changeDetail } = modalDetailSlice.actions;

export default modalDetailSlice.reducer;