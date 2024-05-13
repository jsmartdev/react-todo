import { useState } from 'react';

export const NewTaskForm = ({ addButton }) => {

  const [ entry, setEntry ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entry === "") return;
    addButton(entry);
    setEntry("");
  }

  return (
    <form onSubmit={handleSubmit} className='new-item-form'>
      <label htmlFor='itemInput'>New Task</label>
      <input 
        value={entry} 
        onChange={e => setEntry(e.target.value)} 
        type='text' id='itemInput'
      />
      <button className='add-btn'>Add</button>
    </form>
  )
}
  
