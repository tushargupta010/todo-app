import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import React, { useState } from "react";

function App() {
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

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Sunday",
      description: "Funday",
    },
    {
      sno: 2,
      title: "Monday",
      description: "Oneday",
    },
    {
      sno: 3,
      title: "Tuesday",
      description: "Twoday",
    },
  ]);

  return (
    <>
      <Header title="Todo-List" searchBar={true} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
