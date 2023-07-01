const ToDoItem = ({ completed, id, title, toggleToDo, deleteToDo }) => {
  return (
    <li key={id}>
      <label>
        <input
          checked={completed}
          type="checkbox"
          onChange={(e) => toggleToDo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteToDo(id)} className="btn btn-danger">
        delete
      </button>
    </li>
  );
};
export default ToDoItem;
