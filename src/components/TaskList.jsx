import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, onToggle, onDelete}) => {
  return (
    <div className='space-y-2'>
        {tasks.length === 0 ? (
            <p className=' text-center to-gray-400'>No tasks available</p>
        ) : (
            tasks.map((task)=> (
                <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
            ))
        )}
    </div>
  )
}

export default TaskList
