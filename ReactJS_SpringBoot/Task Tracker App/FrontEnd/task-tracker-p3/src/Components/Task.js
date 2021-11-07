import React from 'react'
import { FaTimes } from 'react-icons/fa'
const Task = ({task,onToggle, onCross}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder':'' }`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.description} <FaTimes style={{color:'red'}} onClick={() => onCross(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
