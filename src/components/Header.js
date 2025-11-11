// import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// import "./App.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">IT Department</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/members">Members</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">SignUp</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
