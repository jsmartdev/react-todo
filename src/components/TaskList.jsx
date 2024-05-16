import { TaskItem } from './TaskItem';

export const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul>
        {tasks.length == 0 && "No Tasks"}
        {tasks.map(task => {
          return (
            <TaskItem{...task} 
                      key={task.id} 
                      toggleTask={toggleTask}
                      deleteTask={deleteTask}
            />
          )
        })}
      </ul>
  )
}