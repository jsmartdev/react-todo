import { TaskItem } from './TaskItem';

export const TaskList = ({ tasks, toggleButton, deleteButton }) => {
  return (
    <ul>
        {tasks.length == 0 && "No Tasks"}
        {tasks.map(task => {
          return (
            <TaskItem{...task} 
                      key={task.id} 
                      toggleButton={toggleButton}
                      deleteButton={deleteButton}
            />
          )
        })}
      </ul>
  )
}