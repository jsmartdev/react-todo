import { useState } from 'react';
import './index.css';

const App = () =>  {
  const [ entry, setEntry ] = useState('');
  const [ tasks, setTasks] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks(theseTasks => {
      return [
        ...theseTasks, { id: crypto.randomUUID(), title: entry, completed: false}
      ]
    })
    setEntry("");
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

  return (
    <>
      <form onSubmit={handleSubmit} className='new-item-form'>
        <label htmlFor='itemInput'>New Task</label>
        <input value={entry} onChange={e => setEntry(e.target.value)} type='text' id='itemInput'/>
        <button className='add-btn'>Add</button>
      </form>
      <h1 className='header'>Task List</h1>
      <ul className='list'>
        {tasks.map(task => {
          return (
            <li key={task.id}>
              <label>
                <input type='checkbox' checked={task.completed} onChange={e => toggleTask(task.id, e.target.checked)} />
                {task.title}
              </label>
              <button className='delete-btn'>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
