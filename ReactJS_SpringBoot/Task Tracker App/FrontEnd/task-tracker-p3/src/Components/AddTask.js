import React from 'react'
import {useState} from 'react'
const AddTask = ({onAdd}) => {
    const [description,setText] = useState('')
    const [day,setTime] = useState('')
    const [reminder,setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!description){
            alert("Please enter task!");
            return;
        }
        onAdd({description,day,reminder})
        setText('')
        setTime('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder="Add Task" value = {description} onChange={(e) => setText(e.target.value)}/> 
            </div>
            <div className='form-control'>
                <label>Time</label>
                <input type='text' placeholder="Add Time" value = {day} onChange={(e) => setTime(e.target.value)}/> 
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Create Task' className='btn btn-block'/>
        </form>
            
        
    )
}

export default AddTask
