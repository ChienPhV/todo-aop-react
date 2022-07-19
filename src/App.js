import "./App.css";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import  { useEffect, useState } from "react";
import * as React from 'react';
import DateIcon from "./components/DateIcon"



function App(props) {
  const [todos, setTodos] = useState(props.todos);
  const [filter, setFilter] = useState("All");

  const addTodo = (name) => {
    if (name === "") return;
    const newTodos = {
      id:todos.length+1,
      name: name,
      isCompleted: false,
    };
    setTodos([...todos, newTodos]);
  };

  const toggleTodoCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

 
  const deleteTodo = (id) => {
    console.log("delete", id)
    const newTodoList = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodoList);
  }

  const editTodo = (id, newName) => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, name: newName };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todoList = todos
    .filter(props.FILTER_MAP[filter])
    .map((todo) => (
      <Todo
        id={todo.id}
        name={todo.name}
        isCompleted={todo.isCompleted}
        key={todo.id}
        toggleTodoCompleted={toggleTodoCompleted}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    ));

  const filterList = props.FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

 
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todoapp">
      <div className="header">
        <DateIcon/>
        <h1 style={{paddingLeft: 20}}>Today</h1>
        <div class="dropdown"> 
          <button class="dropbtn">...</button>
          <div className="filtersButton">{filterList}</div>
        </div>
      </div> 
      <div className="todo-list">{todoList}</div>
      <div>
        <Form addTodo={addTodo} /> 

      </div>
      
    </div>
    
  );
}

export default App;
