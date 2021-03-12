import { Link } from "react-router-dom";
// import TodoList from "./TodoList";
import { ACTIONS, dispatcher } from "../App";
import { useContext } from "react";

function Footer(props) {
  let count = props.todo.filter((todo) => !todo.completed);
  let dispatch = useContext(dispatcher);
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count.length}</strong> item(s) left
      </span>
      <ul className="filters">
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/active">Active</Link>
        </li>
        <li>
          <Link to="/completed">Completed</Link>
        </li>
      </ul>
      <button
        className="clear-completed"
        onClick={() => dispatch({ type: ACTIONS.CLEARCOMPLETE })}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
