import { useState } from 'react';
import { Header } from './components/Header';
import { AddItem } from './components/AddItem';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import './index.css';

const App = () =>  {

  const [ items, setItems ] = useState(JSON.parse(localStorage.getItem('shoppinglist')));

  const [ newItem, setNewItem ] = useState('');

  const setAndSave = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = crypto.randomUUID();
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSave(listItems)
  }

  const handleCheck = (id) =>  {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setAndSave(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSave(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
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
