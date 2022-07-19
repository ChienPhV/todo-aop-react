import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addTodo(name);
    
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }
  const [show, setShow] = useState(false);

  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <button type="submit" className="submitButton" onClick={() => setShow(!show)}>
          +
        </button>
        
      <div className="flex">
        {show &&<input
          type="text"
          id="newtodobox"
          className="todoinput"
          name="text"
          autoComplete="off"
          placeholder="New todo..."
          value={name}
          onChange={handleChange}
        />}
        
        
      </div>
    </form>
  );
}

export default Form;
