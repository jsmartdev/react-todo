/* eslint-disable no-unused-vars */
import React, {useState} from 'react';


export const TodoForm = () => { 
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      console.log(task);
    }
    
  }

  return (
    <form id='TodoForm' className='TodoForm' onChange={handleSubmit}>
      <input  type='text' 
              className='todo-input' 
              placeholder='name a task' 
              onChange={(e) => setTask(e.target.value)}
    />
      <button type='submit'>Submit</button>
    </form>
  )
}
