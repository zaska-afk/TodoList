import TodoItem from "./TodoItem";
import { ACTIONS, dispatcher } from "../App";
import { useContext } from "react";

function TodoList(props) {
  let dispatch = useContext(dispatcher);
  return (
    <section className="main">
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <TodoItem
            title={todo.title}
            completed={todo.completed}
            id={todo.id}
            toggleComplete={() =>
              dispatch({
                type: ACTIONS.TOGGLECOMPLETE,
                payload: { id: props.id },
              })
            }
            deleteTodo={() =>
              dispatch({ type: ACTIONS.DELETETODO, payload: { id: props.id } })
            }
            key={todo.id}
          />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
