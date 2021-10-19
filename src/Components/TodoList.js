import React from 'react'
import { TodoStack } from './TodoStack'

export const TodoList = () => {

  const todos = [{
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
  }]

  return (
    <div className="w-full flex space-x-4">
      {/* Todo status 0 (belum selesai)*/}
      <ul className="shadow-lg bg-red-100 rounded p-2 w-1/2 divide-y divide-gray-200">
        {todos.filter((todo) => todo.status === 0).sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1).map((todo) => (
          <TodoStack todo={todo}/>
        ))}  
      </ul>
      {/* Todo status 1 (selesai)*/}
      <ul className="shadow-lg bg-green-100 rounded p-2 w-1/2 divide-y divide-gray-200">
        {todos.filter((todo) => todo.status === 1).sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1).map((todo) => (
          <TodoStack todo={todo}/>
        ))}  
      </ul>
    </div>
  )
}