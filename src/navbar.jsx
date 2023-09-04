import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/taskadd">Add Task</Link>
        </li>
        <li>
          <Link to="/taskdelete">Delete Task</Link>
        </li>
        <li>
          <Link to="/taskedit">Edit Task</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
