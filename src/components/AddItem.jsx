import React from 'react';
import { FaPlus } from "react-icons/fa";

export const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='addItem'>Add Item</label>
      <input 
        autoFocus
        id='addItem'
        type='text'
        placeholder='Add Item'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        required
      />
      <button
        type='submit'
        aria-label='Add Item'
      >
      <FaPlus />
      </button>
    </form>
  )
}
