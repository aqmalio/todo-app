import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/todoSlice";


export const AddTodo = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  
  const dispatch = useDispatch()

  const onSubmit = () => {
    dispatch(addTodo({
      title: title,
      description: description
    }))
  }

  return (
    <div className="my-6 flex flex-col sm:flex-row space-x-2">
      <div className="w-full relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label htmlFor="title" className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">Something todo</label>
        <input type="text" name="title" value={title} onChange={(event) => setTitle(event.target.value)} id="title" className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Title" />  
      </div>
      <div className="w-full relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <label htmlFor="description" className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">What It's About?</label>
        <input type="text" name="description" value={description} onChange={(event) => setDescription(event.target.value)} id="description" className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Description" />  
      </div>
      <button onClick={onSubmit} type="button" className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add!
      </button>
    </div>
  )
}
