import React, { useEffect, useState } from "react";

const UserAdmin = () => {
  const [aboutMe, setAboutMe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    education: "",
    job: "",
    hobbies: [],
  });
  const [someVar, setSomeVar] = useState(null);

  const renderData = () => {
    console.log("render");
    setSomeVar(true);
  };

  useEffect(() => {
    const fetchAboutMe = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/about");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setAboutMe(data);
        setFormData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutMe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "hobbies"
          ? value.split(",").map((hobby) => hobby.trim())
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/about", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setAboutMe(formData);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Edit Profile</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-input"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="education" className="form-label">
            Education
          </label>
          <input
            type="text"
            className="form-input"
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="job" className="form-label">
            Job
          </label>
          <input
            type="text"
            className="form-input"
            id="job"
            name="job"
            value={formData.job}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="hobbies" className="form-label">
            Hobbies (comma separated)
          </label>
          <input
            type="text"
            className="form-input"
            id="hobbies"
            name="hobbies"
            value={formData.hobbies.join(", ")}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn-submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default UserAdmin;
