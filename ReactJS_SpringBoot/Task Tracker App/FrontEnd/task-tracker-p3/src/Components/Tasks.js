import React from 'react'
import Task from './Task'
const Tasks = ({tasks, onToggle,onCross}) => {

    return (
        <div>
            {tasks.map((task, index) => (
                <Task key={index} task={task} onToggle={onToggle} onCross={onCross}/>
            ))}
        </div>
    )
}

export default Tasks
