import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export const Content = () => {

  const [ items, setItems ] = useState([
    {
      id: crypto.randomUUID(),
      checked: false,
      item: 'Item 1'
    },
    {
      id: crypto.randomUUID(),
      checked: false,
      item: 'Item 2'
    },
    {
      id: crypto.randomUUID(),
      checked: false,
      item: 'Item 3'
    }
  ]);

  const handleCheck = (id) =>  {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }
  
  
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li 
            className='item' 
            key={item.id}
          >
            <input  
              type='checkbox' 
              checked={item.checked} 
              onChange={() => {handleCheck(item.id)}}
            />
            <label>{item.item}</label>
            <FaTrashAlt 
              role='button' 
              tabIndex='0'
              onClick={() => handleDelete(item.id)}
            />
          </li>
        ))}
        
      </ul>
    </main>
  )
}
