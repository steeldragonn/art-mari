import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    idea: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form fields after submission
    setFormData({ name: "", email: "", idea: "" });
  };

  return (
    <div className="contact-container">
      {/* Left Column: Text Section */}
      <div className="contact-left">
        <div>
          <h1 className="contact-title">CON</h1>
          <h1 className="contact-title">TACT</h1>
          <h1 className="contact-title">ME</h1>
        </div>
        <div className="text-block">
          <p className="contact-intro">
            If you want to stay in touch with my work, or would like to create a
            joint art project - leave your details so we can contact you.
          </p>
          <p className="contact-subtext">
            contact me.
            <br />
            create with me.
            <br />
            enjoy.
          </p>
        </div>
      </div>

      {/* Right Column: Form Section */}
      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="name"
              className={`placeholder ${formData.name ? "hidden" : ""}`}
            >
              [ Your Name ]
            </label>
          </div>

          {/* Email Field */}
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="email"
              className={`placeholder ${formData.email ? "hidden" : ""}`}
            >
              [ Your Email ]
            </label>
          </div>

          {/* Idea Field */}
          <div className="form-group">
            <input
              type="text"
              id="idea"
              name="idea"
              value={formData.idea}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="idea"
              className={`placeholder ${formData.idea ? "hidden" : ""}`}
            >
              [ Your Idea ]
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
