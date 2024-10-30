import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import AboutMe from "./pages/about";
import Projects from "./pages/projects";
import Navbar from "./Navbar/index";
import Contact from "./pages/contact";
import Footer from "./Footer/index";
import Login from "./pages/login";
import User from "./pages/user";
import UserAdmin from "./pages/userAdmin";
import Thanks from "./pages/thanks";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notification from "./pages/notifications";

const App = () => {
  const [isLight, setIsLight] = useState(() => {
    const savedTheme = sessionStorage.getItem("theme");
    return savedTheme ? savedTheme === "light" : false;
  });

  const toggleTheme = () => {
    setIsLight((prev) => {
      const newTheme = !prev ? "light" : "dark";
      sessionStorage.setItem("theme", newTheme);
      return !prev;
    });
  };

  useEffect(() => {
    sessionStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  return (
    <div className={`${isLight ? "light" : "dark"}`}>
      <BrowserRouter>
        <Navbar isLight={isLight} toggleTheme={toggleTheme} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/user-admin" element={<UserAdmin />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
