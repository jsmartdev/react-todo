import { useState } from 'react';

export const NewTaskForm = ({entry, setEntry, addTask}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entry  === '') return;
    addTask(entry);
    setEntry('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='itemInput'>New Task</label>
      <input  id='itemInput'
              value={entry} 
              onChange={e => setEntry(e.target.value)} 
              type='text' 
      />
      <button>Add</button>
    </form>
  )
}
  
