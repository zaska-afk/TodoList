function TodoItem(props) {
  return (
    <li className={props.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={(event) => props.toggleComplete(event, props.id)}
          checked={props.completed}
        />
        <label>{props.title}</label>
        <button
          className="destroy"
          onClick={(event) => props.deleteTodo(event, props.id)}
        />
      </div>
    </li>
  );
}

export default TodoItem;
