import React from "react";
import linkedinImg from "../assets/LinkedIn-Logo.png";
import githubImg from "../assets/github-logo.webp";
import notifImg from "../assets/notification-logo.png";
import darkMode from "../assets/dark-mode.svg";
import lightMode from "../assets/light-mode.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Home = () => (
  <a className="nav-link" href="/home">
    Home
  </a>
);

export const About = () => (
  <a className="nav-link" href="/about">
    About Me
  </a>
);

export const Projects = () => (
  <a className="nav-link" href="/projects">
    Projects
  </a>
);

export const Contact = () => (
  <a className="nav-link" href="/contact">
    Get In Touch
  </a>
);
export const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [someVar, setSomeVar] = useState(null);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return isLoggedIn ? (
    <button type="button" onClick={handleLogout} className="logout">
      Logout
    </button>
  ) : (
    <a className="nav-link" href="/login">
      Login
    </a>
  );
};

export const Linkedin = () => (
  <a
    className="nav-link"
    href="https://www.linkedin.com/in/vinayak-sharma-611023196/"
    target="_blank"
  >
    <img className="nav-logo" src={linkedinImg} alt="LinkedIn" />
  </a>
);

export const Github = () => (
  <a className="nav-link" href="https://github.com/vinayak2509" target="_blank">
    <img className="nav-logo" src={githubImg} alt="GitHub" />
  </a>
);

export const Notification = () => {
  const navigate = useNavigate();

  const handleNotificationClick = (e) => {
    e.preventDefault();
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) {
      alert("Login to view Notifications");
      navigate("/login");
    } else if (user.role !== "admin") {
      alert("Only admins can access the notifications page.");
    } else {
      navigate("/notifications");
    }
  };

  return (
    <button
      className="nav-link"
      onClick={handleNotificationClick}
      style={{ background: "none", border: "none", padding: 0 }}
    >
      <img className="nav-logo" src={notifImg} alt="Notifications" />
    </button>
  );
};

export const Mode = ({ toggleTheme, isLight }) => (
  <button onClick={toggleTheme} className="mode-btn nav-link">
    <img
      className="nav-logo"
      src={isLight ? darkMode : lightMode}
      alt="Toggle Mode"
    />
  </button>
);
