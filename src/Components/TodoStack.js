import React from 'react'

export const TodoStack = (props) => {
  const todo = props.todo
  return (
    <li className="bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
      <div className="divide-y divide-gray-200">
        <div className="relative flex items-start py-4">
          <div className="min-w-0 flex-1 text-sm">
            <label htmlFor="comments" className="font-medium text-gray-700">{todo.title}</label>
                <p id="comments-description" className="text-gray-500">{todo.description}</p>
          </div>
          <div className="ml-3 flex flex-col items-end h-5">
            <input defaultChecked={todo.status} id="comments" aria-describedby="comments-description" name="status" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                <p id="comments-description" className="text-gray-500 text-sm">{todo.createdAt}</p>

          </div>
        </div>
      </div>
    </li>
  )
}
