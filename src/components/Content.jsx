import { useState } from 'react'

export const Content = ({ person }) => {

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
  
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className='item' 
              key={item.id}
          >
            <input  type='checkbox' 
                    checked={item.checked} 
            />
            <label>{item.item}</label>
          </li>
        ))}
        
      </ul>
    </main>
  )
}
