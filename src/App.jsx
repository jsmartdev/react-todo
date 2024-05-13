import { useState } from 'react';
import { NewTaskForm } from './NewTaskForm';
import { TaskList } from './TaskList';
import './index.css';

const App = () =>  {
  const [ tasks, setTasks] = useState([]);


  const addTask = (title) => {
    setTasks(theseTasks => {
      return [
        ...theseTasks, { id: crypto.randomUUID(), title, completed: false}
      ]
    })
  }

  const toggleTask = (id, completed) => {
    setTasks(theseTasks => {
      return theseTasks.map(task => {
        if (task.id === id) {
          return {...task, completed}
        }
        return task;
      })
    })
  }

  const deleteTask = (id) => {
    setTasks(theseTasks => {
      return theseTasks.filter(task => {
        if (task.id !== id) {
          return task;
        }
      })
    })
  }

  return (
    <>
      <NewTaskForm addButton={addTask} />
      <h1 className='header'>Task List</h1>
      <TaskList tasks={tasks} deleteButton={deleteTask} toggleButton={toggleTask} />
    </>
  )
}

export default App
