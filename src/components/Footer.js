function Footer(props) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>0</strong> item(s) left
      </span>
      <ul className="filters">
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/active">Active</a>
        </li>
        <li>
          <a href="/completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
