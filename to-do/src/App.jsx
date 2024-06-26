import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Info from './components/info/info';
import Task from './components/task/task';

import { FaBolt } from "react-icons/fa6"
import { FaTasks, FaPlus } from "react-icons/fa";

function App() {

  const [taskinput, setTaskInput] = useState('')

  function addTask() {
    if (taskinput === '') return
    setTasks([...tasks, taskinput])
    setTaskInput('')
  }


  const [tasks, setTasks] = useState([
    'Task 1',
    'Task 2',
    'Task 3',
  ])

  function delTask(index) {
    let newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }
  
  return (
    <>
      <Navbar />
      <div className='seperator'></div>
      <Info />
      <main className="main">
        <section className="todo">
          <div className='todo-input'>
            <FaTasks color='#fff' size='1em' />
            <input type="text" placeholder="add a task"
              value={taskinput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <div className='add'>
              <FaPlus color='#fff' size='1em' onClick={addTask}/>
            </div>
          </div>
          {
            tasks.map((task, index) => (
              <Task key={index} name={task} index={index} deletefxn={delTask}/>
            ))
          }
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
