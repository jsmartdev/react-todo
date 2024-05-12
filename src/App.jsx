import React from 'react';
import { Card } from './components/Card';
import { TodoForm } from './components/TodoForm';
import './index.css';

function App() {

  return (
    <div className='page'>
      <Card />
      <TodoForm />
    </div>
      
  )
}

export default App
