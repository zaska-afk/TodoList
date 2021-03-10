import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
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

  const keypress = (e) => {
    // console.log(e.key);
    if (e.key === "Enter") {
      //unique key id
      const todoText = uuidv4();

      const todo = {
        title: state,
        completed: false,
        id: todoText,
      };

      setTodos((todos) => [...todos, todo]);
      //empty the input field
      setState("");
      console.log(state, "state");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keypress);
    return () => {
      //clears event listener as to not double the keypress
      window.removeEventListener("keydown", keypress);
    };
  });

  //############### PART TWO #############
  // Marking a todo as completed

  // function toggleComplete(event, todoId) {}

  const toggleComplete = (event, todoId) => {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoId) {
          let markedTodo = { ...todo };
          markedTodo.completed = !markedTodo.completed;
          return markedTodo;
        }
        return todo;
      });
    });
  };

  //############### PART THREE #############
  //deleting todos by filtering
  const deleteTodo = (event, todoId) => {
    setTodos((todos) => {
      return todos.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };

  //  ######### Clear Complete #####
  //deletes checked todos

  const clearComplete = () => {
    setTodos((todos) => {
      return todos.filter((todo) => {
        return !todo.completed;
      });
    });
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          onChange={onChange}
          //empties input field after pressing enter
          value={state}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </header>
      <Switch>
        {/* //link to active still active todos */}
        <Route path="/active">
          <TodoList
            todos={todos.filter((item) => {
              return item.completed === false;
            })}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </Route>
        {/* //link to completed todos */}
        <Route path="/completed">
          <TodoList
            todos={todos.filter((item) => {
              return item.completed === true;
            })}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </Route>

        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </Switch>
      <Footer
        clearComplete={clearComplete}
        todo={todos.filter((todo) => todo.completed === false).length}
      />
    </section>
  );
}

export default App;
