import { useState } from 'react';
import { Header } from './components/Header';
import { AddItem } from './components/AddItem';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import './index.css';

const App = () =>  {

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

  const [ newItem, setNewItem ] = useState('');

  const handleCheck = (id) =>  {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = () => {
    e.preventDefault();
    console.log('submitted');
  }
  
  return (
    <div className='flex flex-col items-center justify-start w-screen h-screen'>
      <Header text='Groceries List' />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  )
}

export default App
