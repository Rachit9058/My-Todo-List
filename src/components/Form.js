import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [input, setInput] = useState("");
  const [listData, setListData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const formSubmit = (e) => {
    e.preventDefault();

    if (input.trim() !== "") {
      if (editIndex !== null) {
        // If an edit is in progress, update the todo
        const updatedTodos = [...listData];
        updatedTodos[editIndex] = input;
        setListData(updatedTodos);
        setEditIndex(null); // Reset editIndex
      } else {
        // Otherwise, add a new todo
        setListData([...listData, input]);
      }
    }

    setInput("");
  };

  // Function to start editing a todo
  const startEdit = (index) => {
    setInput(listData[index]);
    setEditIndex(index);
  };

  // Function to cancel editing
  const cancelEdit = () => {
    setInput("");
    setEditIndex(null);
  };

  const removeTodo = (index) => {
    const newTodos = [...listData];
    newTodos.splice(index, 1);
    setListData(newTodos);
  };

  const removeAll = () =>{
    setListData([]);
  }
  
  const inputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder={editIndex !== null ? "Edit todo" : "Add a new todo"}
          className="text-input"
          value={input}
          required
          onChange={inputChange}
        />
        <button className="btn btn-primary" type="submit">
          {editIndex !== null ? "Save" : "Add"}
        </button>
        {editIndex !== null && <button onClick={cancelEdit} className="btn btn-primary mx-3">Cancel</button>}
      </form>
      <div className="li">
        <ul>
          {listData.map((item, index) => (
            <li key={index}>
              {editIndex === index ? (
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="list-input"
                />
              ) : (
                item
              )}
              <button
                onClick={() => removeTodo(index)}
                className="btn btn-primary  remove"
              >
                Remove
              </button>
              <button
                onClick={() => startEdit(index)}
                className="btn btn-primary  edit"
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
      {listData.length > 0 && (
        <button className="btn btn-primary remove-all" onClick={removeAll}>Remove All</button>
      )}
      
    </div>
  );
}
