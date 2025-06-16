import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';

const TaskInput = ({ onAdd }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(input);
        setInput("");
    }
  return (
   <form onSubmit={handleSubmit} className='flex mb-4'>
    <input type="text" 
    value={input}
    className='flex-1 border bg-gray-300 px-3 py-2' 
    placeholder='Add new task...'
    onChange={(e) => setInput(e.target.value)} />
    <button className='bg-blue-500  text-white px-4 rounded-r hover:bg-blue-600'>
        <FaPlus />
    </button>
   </form>
  )
}

export default TaskInput
