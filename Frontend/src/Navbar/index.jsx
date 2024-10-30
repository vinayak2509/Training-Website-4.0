import React from "react";
import {
  Home,
  About,
  Projects,
  Contact,
  Linkedin,
  Github,
  Mode,
  Login,
  Notification,
} from "./components";
import "./index.css";

const Navbar = ({ isLight, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navi">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Home />
            </li>
            <li className="nav-item">
              <About />
            </li>
            <li className="nav-item">
              <Projects />
            </li>
            <li className="nav-item">
              <Contact />
            </li>
            <li className="nav-item">
              <Login />
            </li>
            <li className="nav-item nav-links">
              <Linkedin />
              <Github />
              <Notification />
              <Mode isLight={isLight} toggleTheme={toggleTheme} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
