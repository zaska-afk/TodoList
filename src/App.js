import React from "react";
import "./App.css";
import { useReducer, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import todosList from "./todos.json";

import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

const ACTIONS = {
  TOGGLECOMPLETE: "TOGGLECOMPLETE",
  ADDTODO: "ADDTODO",
  DELETETODO: "DELETETODO",
  CLEARCOMPLETE: "CLEARCOMPLETE",
  INPUTTEXT: "INPUTTEXT",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADDTODO:
      return {
        ...state,
        todoList: [...state.todoList, newTodo(action.payload.name)],
      };
    case ACTIONS.DELETETODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      };
    case ACTIONS.CLEARCOMPLETE:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => {
          return !todo.completed;
        }),
      };
    case ACTIONS.INPUTTEXT:
      return { ...state, userInput: action.payload.text };
    case ACTIONS.TOGGLECOMPLETE:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            let markedTodo = { ...todo };
            markedTodo.completed = !markedTodo.completed;
            return markedTodo;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}

function newTodo(name) {
  return { id: Date.now(), title: name, completed: false };
}

function App() {
  const initialState = {
    todoList: todosList,
    userInput: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (e) => {
    dispatch({ type: ACTIONS.INPUTTEXT, payload: { text: e.target.value } });
  };

  const keypress = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: ACTIONS.ADDTODO, payload: { name: state.userInput } });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keypress);
    return () => {
      //clears event listener as to not double the keypress
      window.removeEventListener("keydown", keypress);
    };
  });

  return (
    <dispatcher.Provider value={dispatch}>
      <section className="todoapp">
        <header className="header">
          <h1>Todo List</h1>
          <input
            onChange={onChange}
            //empties input field after pressing enter
            value={state.userInput}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
          />
        </header>
        <Switch>
          {/* //link to active still active todos */}
          <Route path="/active">
            <TodoList
              todos={state.todoList.filter(
                (item) => item.completed === false
                // return item.completed === false;
              )}
            />
          </Route>
          {/* //link to completed todos */}
          <Route path="/completed">
            <TodoList
              todos={state.todoList.filter((item) => item.completed === true)}
            />
          </Route>

          <TodoList todos={state.todoList} />
        </Switch>
        <Footer
          todo={state.todoList.filter((todo) => todo.completed === false)}
        />
      </section>
    </dispatcher.Provider>
  );
}

export const dispatcher = React.createContext(null);
export { ACTIONS };
export default App;
