
import Header from './Components/Header'
import Tasks from './Components/Tasks';
import { useState, useEffect  } from 'react'
import AddTask from './Components/AddTask';
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTask] = useState([])

  useEffect(() => {
    console.log("fetching all tasks")
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTask(tasksFromServer)
    }
    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:8080/api/v1/tasks')
    const data = await res.json()
    console.log(data)
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8080/api/v1/tasks/${id}`)
    const data = await res.json()
    return data
  }



  const onToggle = async (id) => {
    /*
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder:!taskToToggle.reminder}
    */
    const res = await fetch(`http://localhost:8080/api/v1/tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      //body: JSON.stringify(updTask)
    })
    const data = await res.json()
    setTask(tasks.map((task) => task.id === id ? {...task,reminder:data.reminder}:task))
  }

  const onCross = async(id) => {
    console.log("cross",id)
    //console.log("Pressed Cross",id)
    //apply filter
    await fetch(`http://localhost:8080/api/v1/tasks/${id}`,{
      method: 'DELETE',
    })
    setTask(tasks.filter((task) => task.id !== id))
  }

  const onAdd = async(task) => {
    console.log("-->",task)
    const res = await fetch('http://localhost:8080/api/v1/tasks',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTask([...tasks,data])
    console.log("data -->",data)
    console.log("task --> ",tasks)
    console.log("res --> ",res)
    /*
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTask([...tasks, newTask])
    */
  }
  return (
    <div className='container'>
      <Header title="Task Tracker" onAddBtn = {() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={onAdd}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={onToggle} onCross={onCross}/>: "You don't have any tasks..."}
    </div>
  );
}

export default App;