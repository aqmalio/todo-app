import { Fragment, useRef, useState,useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSelector, useDispatch } from 'react-redux'
import { changeDetail } from "../Redux/modalDetailSlice";
import { toggleStatus, updateTodo, deleteTodo } from '../Redux/todoSlice'


export const TodoDetail = () => {
  const todoDetail = useSelector((state) => state.detail)
  const cancelButtonRef = useRef(null)
  const dispatch = useDispatch()

  const [updatedTitle, setUpdateTitle] = useState('')
  const [updatedDescription, setUpdateDescription] = useState('')
  const [updatedStatus, setUpdateStatus] = useState()

  useEffect(() => {
    setUpdateTitle(todoDetail.title)
    setUpdateDescription(todoDetail.description)
    setUpdateStatus(todoDetail.status)
  }, [todoDetail])

  const setOpen = (val) => {
    dispatch(changeDetail({ ...todoDetail, openModal: val }))
  }

  const changeStatus = (event) => {
    setUpdateStatus(event.target.checked ? 1 : 0)
    dispatch(toggleStatus({
      id: event.target.id,
      status: event.target.checked ? 1 : 0
    }))
  }

  const onUpdate = () => {
    dispatch(updateTodo({
      id: todoDetail.id,
      title: updatedTitle,
      description: updatedDescription
    }))
    setOpen(false)
  }

  const onDelete = () => {
    dispatch(deleteTodo({
      id: todoDetail.id
    }))
    setOpen(false)
  }
  
  return (
    <Transition.Root show={todoDetail.openModal} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      Todo: {todoDetail.title} 
                    </Dialog.Title>
                    <div className="mt-2">
                      <div className="my-6 flex flex-col sm:flex-col space-y-6">
                        <div className="w-full relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                          <label htmlFor="title" className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">Change Title</label>
                          <input type="text" name="title" value={updatedTitle} onChange={(event) => setUpdateTitle(event.target.value)} id="title" className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Title" />  
                        </div>
                        <div className="w-full relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                          <label htmlFor="description" className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">Change Description</label>
                          <input type="text" name="description" value={updatedDescription} onChange={(event) => setUpdateDescription(event.target.value)} id="description" className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Description" />  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse items-center">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onUpdate}
                >
                  Update
                </button>
                {!updatedStatus && (
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onDelete}
                >
                  Delete
                </button>
                )}
                
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Close
                </button>
                <div className="ml-3 w-full items-stretch flex flex-col h-5">
                  <input onChange={changeStatus} defaultChecked={todoDetail.status} id={todoDetail.id} aria-describedby="comments-description" name="status" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}