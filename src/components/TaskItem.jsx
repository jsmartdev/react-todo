import { NewTaskForm } from "./NewTaskForm";

export const TaskItem = ({ id, title, completed, toggleTask, deleteTask }) => {

  return (
    <li key={id}>
      <label>
        <input  type='checkbox' 
                checked={completed} 
                onChange={e => toggleTask(id, e.target.checked)} 
        />
        {title}
        <button onClick={() => deleteTask(id)}>Delete</button>
      </label>
    </li>
  )
}