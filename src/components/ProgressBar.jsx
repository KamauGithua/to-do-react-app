import React from 'react'

const ProgressBar = ({ completed, total}) => {
    const percent = total === 0 ? 0 : (completed / total ) * 100;
  return (
    <div className=' h-4 bg-green-500 rounded transition-all duration-300'
    style={{ width: `${percent}%`}}
    >
    </div>
  )
}

export default ProgressBar
