import { useContext } from "react";
import { ACTIONS, dispatcher } from "../App";

function TodoItem(props) {
  let dispatch = useContext(dispatcher);
  return (
    <li className={props.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={() =>
            dispatch({
              type: ACTIONS.TOGGLECOMPLETE,
              payload: { id: props.id },
            })
          }
          checked={props.completed}
        />
        <label>{props.title}</label>
        <button
          className="destroy"
          onClick={() =>
            dispatch({ type: ACTIONS.DELETETODO, payload: { id: props.id } })
          }
        />
      </div>
    </li>
  );
}

export default TodoItem;
