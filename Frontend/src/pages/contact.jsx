import { useState } from "react";
import "./CSS/contact.css";
import { useNavigate } from "react-router-dom";

const Tooltip = ({ text, visible }) => {
  return (
    <span className={`tooltip-text ${visible ? "show" : ""}`}>{text}</span>
  );
};

const Contact = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showTooltip, setShowTooltip] = useState(false);
  const [serverErrors, setServerErrors] = useState([]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setShowTooltip(false);
    setServerErrors([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const data = await response.json();
        setServerErrors(data.errors || []);
      } else {
        console.log("Form submitted:", user);
        setUser({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error);
    }

    if (!user.name || !user.email || !user.message) {
      setShowTooltip(true);
      return;
    }

    setShowTooltip(false);
    navigate("/thanks");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form-title">Get in Touch</h1>
        <p className="form-subtitle">
          I’d love to hear from you. Please fill out the form below.
        </p>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <Tooltip
            text="This field is required"
            visible={showTooltip && !user.name}
          />
          {serverErrors.find((error) => error.param === "name") && (
            <Tooltip
              text={serverErrors.find((error) => error.param === "name").msg}
              visible={true}
            />
          )}
        </div>

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
          <Tooltip
            text="This field is required"
            visible={showTooltip && !user.email}
          />
          {serverErrors.find((error) => error.param === "email") && (
            <Tooltip
              text={serverErrors.find((error) => error.param === "email").msg}
              visible={true}
            />
          )}
        </div>

        <div className="form-row">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-input message"
            id="message"
            name="message"
            value={user.message}
            onChange={handleChange}
            rows="4"
          />
          <Tooltip
            text="This field is required"
            visible={showTooltip && !user.message}
          />
          {serverErrors.find((error) => error.param === "message") && (
            <Tooltip
              text={serverErrors.find((error) => error.param === "message").msg}
              visible={true}
            />
          )}
        </div>

        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
