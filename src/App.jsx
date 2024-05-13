import { useState } from 'react';
import { NewTaskForm } from './NewTaskForm';
import './index.css';

const App = () =>  {
  const [ tasks, setTasks] = useState([]);


  const addTask = (title) => {
    setTasks(theseTasks => {
      return [
        ...theseTasks, { id: crypto.randomUUID(), title, completed: false}
      ]
    })
  }

  const toggleTask = (id, completed) => {
    setTasks(theseTasks => {
      return theseTasks.map(task => {
        if (task.id === id) {
          return {...task, completed}
        }
        return task;
      })
    })
  }

  const deleteTask = (id) => {
    setTasks(theseTasks => {
      return theseTasks.filter(task => {
        if (task.id !== id) {
          return task;
        }
      })
    })
  }

  return (
    <>
      <NewTaskForm addButton={addTask} />
      <h1 className='header'>Task List</h1>
      <ul className='list'>
        {tasks.length === 0 && "No Tasks"}
        {tasks.map(task => {
          return (
            <li key={task.id}>
              <label>
                <input type='checkbox' checked={task.completed} onChange={e => toggleTask(task.id, e.target.checked)} />
                {task.title}
              </label>
              <button className='delete-btn' onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
