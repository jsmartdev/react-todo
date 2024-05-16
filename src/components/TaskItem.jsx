
export const TaskItem = ({ id, title, completed, toggleTask, deleteTask }) => {

  return (
    <li key={id}>
      <label>
        <input  type='checkbox' 
                checked={completed} 
                onChange={e => toggleTask(id, e.target.checked)} 
        />
        {title}
      </label>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </li>
  )
}