import { useState} from 'react';

export const TodoForm = () => {   
  
  const [ task, setTask ] = useState('');


  return (
    <form className="todo-form">
      <label htmlFor='todo-input'>New Task</label>
      <input  id='todo-input'
              value={task} 
              onChange={e => setTask(e.target.value)} 
              type='text' 
              placeholder='add a task'
      />
      <button>Add</button>
    </form>
  )
}
