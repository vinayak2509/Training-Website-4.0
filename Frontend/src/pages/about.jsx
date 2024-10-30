import React, { useEffect, useState } from "react";
import "./CSS/about.css";
import pfp from "../assets/pfp.jpg";

const AboutMe = () => {
  const [aboutMe, setAboutMe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAboutMe = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/about");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setAboutMe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutMe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>About Me</h1>
      <div className="about">
        <img className="pfp" src={pfp} alt="Profile" />
        <p className="about-me">
          My name is {aboutMe.name}. I am a resident of {aboutMe.location}. I
          have recently completed my {aboutMe.education} and am currently
          working at {aboutMe.job}. My hobbies include{" "}
          {aboutMe.hobbies.join(", ")}.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
