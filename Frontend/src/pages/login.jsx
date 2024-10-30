import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("user");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      navigate(userData.role === "admin" ? "/user-admin" : "/user");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (response.ok) {
        sessionStorage.setItem(
          "user",
          JSON.stringify({ email: user.email, role: data.role })
        );
        navigate(data.role === "admin" ? "/user-admin" : "/user");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Login</h4>
        {error && <div className="error-tooltip">{error}</div>}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
