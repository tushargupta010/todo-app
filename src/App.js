import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useEffect, useState } from "react";
import { AddTodo } from "./MyComponents/AddTodo";

function App() {
  let initTodos;
  if (localStorage.getItem("todos") === null) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete todo : ", todo);
    // Deleting this way in reactb doesn;t work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    // work this way in react
    setTodos(
      todos.filter((t) => {
        return t !== todo;
      })
    );
  };

  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);

  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, description) => {
    let sno = 0;
    if (todos.length !== 0) {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  return (
    <>
      <Header title="Todo-List" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
