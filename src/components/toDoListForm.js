import { useState } from "react";

const ToDoForm = ({ onSubmit }) => {
  // props.onSubmit
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(newItem);
    setNewItem("");
  };

  // setToDo((currentToDos) => {
  //   return [
  //     ...currentToDos,
  //     { id: crypto.randomUUID(), title: newItem, completed: false }
  //   ];
  // });

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="Item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};

export default ToDoForm;
