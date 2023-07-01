import ToDoItem from "./toDoitem";

const ToDoList = ({ toDos, toggleToDo, deleteToDo }) => {
  return (
    <>
      <h1 className="header">To Do List</h1>
      <ul className="list">
        {toDos.length === 0 && <li>No ToDos</li>}
        {toDos.map((todo) => (
          <ToDoItem
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            key={todo.id}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo}
          />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
