import { useState, useEffect } from 'react';
import { NewTaskForm } from './components/NewTaskForm';
import { TaskList } from './components/TaskList';
import './index.css';

const App = () =>  {
  const [ tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("Items")
    if (localValue == null) return [];
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(tasks))
  }, [tasks])

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
    <div className='flex flex-col items-center justify-center w-screen h-screen'>
      <h1 className='underline'>2DUZ</h1>
      <NewTaskForm addTask={addTask} />
      <h1>Task List</h1>
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
    </div>
  )
}

export default App
