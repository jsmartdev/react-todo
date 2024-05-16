import { useState } from 'react';

export const NewTaskForm = ({addTask}) => {

  const [ entry, setEntry ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entry === "") return;
    addTask(entry);
    setEntry("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='itemInput'>New Task</label>
      <input 
        value={entry} 
        onChange={e => setEntry(e.target.value)} 
        type='text' id='itemInput'
      />
      <button>Add</button>
    </form>
  )
}
  
