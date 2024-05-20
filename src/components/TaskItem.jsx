export const TaskItem = ({ id, completed, toggleTask, deleteTask }) => {
  const [ edit, setEdit] = useState({id: null, value: ''})

  return (
    <li key={id}>
      <label>
        <input  type='checkbox' 
                checked={completed} 
                onChange={e => toggleTask(id, e.target.checked)} 
        />
        {title}
        <button onClick={() => deleteTask(id)}>Delete</button>
        <button onClick={() => setEdit(edit.id === id, value === task.text)}>Edit</button>
      </label>
    </li>
  )
}