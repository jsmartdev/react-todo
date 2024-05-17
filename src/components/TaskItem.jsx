import { useState } from 'react';
import { NewTaskForm } from './NewTaskForm';

export const TaskItem = ({ id, title, completed, toggleTask, deleteTask }) => {
  
  const [ edit, setEdit ] = useState({id: null, value: ''} ) 
  
  if (edit.id) {
    return <NewTaskForm edit={edit} onSubmit={submitUpdate} />
  }

  return (
    <li key={id}>
      <label>
        <input  type='checkbox' 
                checked={completed} 
                onChange={e => toggleTask(id, e.target.checked)} 
        />
        {title}
        <button onClick={() => deleteTask(id)}>Delete</button>
        <button onClick={() => setEdit({id: id, value: title})}>Edit</button>
      </label>
    </li>
  )
}