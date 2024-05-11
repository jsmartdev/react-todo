/* eslint-disable no-unused-vars */
import React, {useState} from 'react';


export const TodoForm = () => { 
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      console.log(task);
      setTask('');
    }
    
  }

  return (
    <form id='TodoForm' className='TodoForm'>
      <input  type='text' 
              className='todo-input' 
              placeholder='name a task' 
              onChange={(e) => setTask(e.target.value)}
    />
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </form>
  )
}
