import React, { useState } from 'react'
import ProgressBar from './components/ProgressBar'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { initialTasks } from './data'

const App = () => {
  const [tasks, setTasks ] = useState(initialTasks);

  const handleAddTask = (title) => {
    if (title.trim() === "") return;
    const newTask = { id: Date.now(), title, completed: false};
    setTasks([newTask, ...tasks]);
    toast.success("Task added!");
  };

  const handleToggle = (id) => {
    setTasks(tasks.map(task=>(
      task.id === id ? {...task, completed: !task.completed} : task
    )));
    toast.info("Task updated!");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    toast.warn("Task deleted");
  };

  const completedCount = tasks.filter(t => t.completed).length;



  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-4'>
      <div className='max-w-xl mx-auto bg-white shadow-xl rounded-lg p-6'>
        <h1 className='text-3xl font-bold text-center mb-4'>ToDo Manager</h1>
        <ProgressBar completed={completedCount} total={tasks.length} />
        <TaskInput onAdd={handleAddTask} />
        <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
