import React from "react";
import "./App.css";
// import { useState } from "react";
import { useReducer, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
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
  // const [todos, setTodos] = useState(todosList);
  const initialState = {
    todoList: todosList,
    userInput: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //################PART ONE##############
  // add a state variable to track the user's input.
  // const [state, setState] = useState("");

  //  set the onChange for the input element to a function which updates the user's input in state.
  // const onChange = (e) => {
  //   let inputText = state;
  //   inputText = e.target.value;
  //   setState(inputText);
  //   console.log(state);
  // };

  const onChange = (e) => {
    dispatch({ type: ACTIONS.INPUTTEXT, payload: { text: e.target.value } });
  };

  const keypress = (e) => {
    // console.log(e.key);
    if (e.key === "Enter") {
      dispatch({ type: ACTIONS.ADDTODO, payload: { name: state.userInput } });
      //unique key id
      // const todoText = uuidv4();

      // const todo = {
      //   title: state,
      //   completed: false,
      //   id: todoText,
      // };

      // setTodos((todos) => [...todos, todo]);
      // //empty the input field
      // setState("");
      // console.log(state, "state");
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

  // const toggleComplete = (event, todoId) => {
  //   setTodos((todos) => {
  //     return todos.map((todo) => {
  //       if (todo.id === todoId) {
  //         let markedTodo = { ...todo };
  //         markedTodo.completed = !markedTodo.completed;
  //         return markedTodo;
  //       }
  //       return todo;
  //     });
  //   });
  // };

  //############### PART THREE #############
  //deleting todos by filtering
  // const deleteTodo = (event, todoId) => {
  //   setTodos((todos) => {
  //     return todos.filter((todo) => {
  //       return todo.id !== todoId;
  //     });
  //   });
  // };

  //  ######### Clear Complete #####
  //deletes checked todos

  // const clearComplete = () => {
  //   setTodos((todos) => {
  //     return todos.filter((todo) => {
  //       return !todo.completed;
  //     });
  //   });
  // };

  return (
    <dispatcher.Provider value={dispatch}>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
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
              // toggleComplete={toggleComplete}
              // deleteTodo={deleteTodo}
            />
          </Route>
          {/* //link to completed todos */}
          <Route path="/completed">
            <TodoList
              todos={state.todoList.filter(
                (item) => item.completed === true
                // item.completed === true;
              )}
              // toggleComplete={toggleComplete}
              // deleteTodo={deleteTodo}
            />
          </Route>

          <TodoList
            todos={state.todoList}
            // toggleComplete={toggleComplete}
            // deleteTodo={deleteTodo}
          />
        </Switch>
        <Footer
          // clearComplete={clearComplete}
          todo={state.todoList.filter((todo) => todo.completed === false)}
        />
      </section>
    </dispatcher.Provider>
  );
}

export const dispatcher = React.createContext(null);
export { ACTIONS };
export default App;
