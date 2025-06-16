import React from 'react'
import { FaCheckCircle, FaTimesCircle, FaTrash } from 'react-icons/fa'

const TaskItem = ({task, onToggle, onDelete }) => {
  return (
    <div className='flex justify-center items-center bg-gray-100 p-3 rounded shadow '>
        <div className={`flex-1 cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}>
            {task.title}
        </div>
        <div className="flex gap-2">
            <button className={`text-xl cursor-pointer ${task.completed ? "text-green-500" : "to-gray-400"}`}
            onClick={()=>onToggle(task.id)}
            >
                {task.completed ? <FaTimesCircle /> : <FaCheckCircle />}
            </button>
            <button className='text-xl text-red-500'
            onClick={()=>onDelete(task.id)}
            >
                <FaTrash />
            </button>
        </div>
    </div>
  )
}

export default TaskItem
