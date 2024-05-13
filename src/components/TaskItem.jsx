export const TaskItem = ({ id, title, completed, toggleButton, deleteButton }) => {
  return (
    <li key={id}>
      <label>
        <input  type='checkbox' 
                checked={completed} 
                onChange={e => toggleButton(id, e.target.checked)} 
        />
        {title}
      </label>
      <button className='delete-btn' onClick={() => deleteButton(id)}>Delete</button>
    </li>
  )
}