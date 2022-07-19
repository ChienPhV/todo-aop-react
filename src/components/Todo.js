import React, { useState } from "react";

export default function Todo(props) {
  
  const [newName, setNewName] = useState(props.name);
 
  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
 
    e.preventDefault();
    props.editTodo(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const [isEditing, setEditing] = useState(false);

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}></label>
        <input
          id={props.id}
          className="todo-text todoinput"
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => {
            setNewName(props.name);
            setEditing(false);
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn__primary todo-edit"
          onClick={() => {
            props.editTodo(props.id, newName);
            setEditing(false);
          }}
        >
          Save
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="todo stack-small">
      <div className="viewTemplate">
        <input
          id={props.id}
          type="radio"
          className="checkradion"
          defaultChecked={props.isCompleted}
          onChange={() => props.toggleTodoCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id} onDoubleClick={() => {
            setEditing(true);
          }}>
          {props.name}
        </label>
        <div className="todo-delete" onClick={() => {
            props.deleteTodo(props.id);
          }}>x</div>    
      </div>
      <div className="btn-group">
        {/* <button
          type="button"
          className="btn"
          onClick={() => {
            setEditing(true);
          }}
        >
          Edit
        </button> */}
        {/* <button
          type="button"
          className="btn btn__danger"
          onClick={() => {
            props.deleteTodo(props.id);
          }}
        >
          Delete
        </button> */}
      </div>
    </div>
  );

  return isEditing ? editingTemplate : viewTemplate;
}
