import React from 'react'

export const TodoStack = (props) => {
  const todo = props.todo
  return (
    <li class="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
      <div class="flex justify-between space-x-3">
        <div class="min-w-0 flex-1">
          <button class="block focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true"></span>
            <p class="text-sm font-medium text-gray-900 truncate">{ todo.title }</p>
          </button>
        </div>
        <time datetime="2021-01-27T16:35" class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">{ todo.createdAt }</time>
      </div>
      <div class="mt-1">
        <p class="line-clamp-2 text-sm text-gray-600">
          {todo.description}
        </p>
      </div>
    </li>
  )
}
