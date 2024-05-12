import { useState } from 'react';
import './index.css';

const App = () =>  {
  const [ entry, setEntry ] = useState('');
  const [ tasks, setTasks] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks(currentTasks => {
      return [
        ...currentTasks, { id: crypto.randomUUID(), title: entry, completed: false}
      ]
    })
    console.log(tasks);
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
                <input type='checkbox' checked={task.completed} />
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
