import { useState } from 'react';
import { TaskItem } from './TaskItem';
import { NewTaskForm } from './NewTaskForm';

export const TaskList = () => {

  const [ tasks, setTasks ] = useState([]);
  const [ entry, setEntry ] = useState('');
  
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
    <NewTaskForm  entry={entry} 
                  setEntry={setEntry} 
                  addTask={addTask} 
    />
    <ul>
        {tasks.length == 0 && "No Tasks"}
        {tasks.map(task => {
          return (
            <TaskItem {...task} 
                      key={task.id} 
                      task={task}
                      toggleTask={toggleTask}
                      deleteTask={deleteTask}
            />
          )
        })}
    </ul>
    </>
    
  )
}