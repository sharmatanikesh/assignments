import { useState } from 'react'
import './App.css'
import Todo from './component/todo'

function App() {
  const [des,setDes] = useState("")
  const [title,setTitle] = useState("")
  const [tasks,setTasks] = useState([])
  const addTitle =(e)=>{
    setTitle(e.target.value)
    console.log(title)

  }

  const addDes =(e)=>{
    setDes(e.target.value)
    console.log(des)

  }

  const addTask =()=>{
    setTasks([ ...tasks,
      {
        title:title,
        description:des
      }])
      setTitle('');
      setDes('');
      console.log(tasks)
    
  }

  return (
    <>
    <form >
      <label htmlFor="title">
        <input type="text" onChange={addTitle} placeholder='Enter the title'  />  
      </label>  
      <label htmlFor="description">
        <input type="text" onChange={addDes} placeholder='Enter the description'  />  
      </label>

      <button  type="button" onClick={addTask}>Submit</button>
    </form>  

    
      <div>
        
        {tasks.map((task,index)=>( 
          <Todo key={index} title={task.title} description={task.description}></Todo>
        ))}
      </div>
    
    </>
  )
}

export default App
