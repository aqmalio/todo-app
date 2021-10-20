import React, { useEffect } from 'react'
import { TodoStack } from './TodoStack'
import { useSelector, useDispatch } from 'react-redux'
import { getTodosFromApi } from "../Redux/todoSlice";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodosFromApi())
  }, [dispatch])

  return (
    <div className="w-full flex space-x-4">
      {/* Todo status 0 (belum selesai)*/}
      <ul className="shadow-lg bg-red-100 rounded p-2 w-1/2 divide-y divide-gray-200">
      <h3 className="py-2 text-lg leading-6 font-medium text-gray-900">Todo</h3>
        {todos.filter((todo) => todo.status === 0).sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1).map((todo) => (
          <TodoStack key={todo.id} todo={todo}/>
        ))}  
      </ul>
      {/* Todo status 1 (selesai)*/}
      <ul className="shadow-lg bg-green-100 rounded p-2 w-1/2 divide-y divide-gray-200">
      <h3 className="py-2 text-lg leading-6 font-medium text-gray-900">Completed</h3>
        {todos.filter((todo) => todo.status === 1).sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1).map((todo) => (
          <TodoStack key={todo.id} todo={todo}/>
        ))}  
      </ul>
    </div>
  )
}