import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import todosList from "./todos.json";

import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState(todosList);

  //################PART ONE##############
  // add a state variable to track the user's input.
  const [state, setState] = useState("");

  //  set the onChange for the input element to a function which updates the user's input in state.
  const onChange = (e) => {
    let inputText = state;
    inputText = e.target.value;
    setState(inputText);
    console.log(state);
  };
  // doggie speed dating for event listener and keydown and look at the function for set todos

  const keypress = (e) => {
    // console.log(e.key);
    if (e.key === "Enter") {
      // console.log(state);

      const todoText = uuidv4();

      const todo = {
        title: state,
        completed: false,
        id: todoText,
      };

      const newTodo = [...todos];
      newTodo[todoText] = todo;
      setTodos(newTodo);
      console.log(todo);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keypress);
    return () => {
      window.removeEventListener("keydown", keypress);
    };
  }, [todos]);

  //############### PART TWO #############

  // function toggleComplete() {}

  //############### PART THREE #############

  // function deleteTodo() {}

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          onChange={onChange}
          className="new-todo"
          placeholder="What needs to be done?"
          autofocus
        />
      </header>
      <TodoList todos={todos} />
      <Footer />
    </section>
  );
}

// // Hook
// function useKeyPress(targetKey) {
//   // State for keeping track of whether key is pressed
//   const [keyPressed, setKeyPressed] = useState(false);

//   // If pressed key is our target key then set to true
//   function downHandler({ key }) {
//     if (key === targetKey) {
//       setKeyPressed(true);
//     }
//   }

//   // If released key is our target key then set to false
//   const upHandler = ({ key }) => {
//     if (key === targetKey) {
//       setKeyPressed(false);
//     }
//   };

// useEffect(() => {
//   window.addEventListener('keydown', downHandler);

//   // Remove event listeners on cleanup
//   return () => {
//     window.removeEventListener('keydown', downHandler);

//   };
// }, []);

// return keyPressed;

export default App;
