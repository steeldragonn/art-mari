import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form fields after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-container">
      {/* Top Row: Headings */}
      <div className="top-row">
        <h1 className="contact-heading">Contact</h1>
        <h1 className="collaboration-heading">Or collaborate with me</h1>
      </div>

      {/* Bottom Row */}
      <div className="bottom-row">
        {/* Left Column: Contact Info */}
        <div className="left-column">
          {/* Split information into two groups */}
          <div className="contact-info-group">
            <div>
              <p>
                <strong>Email:</strong> meryy8009@gmail.com
              </p>

              <p>
                <strong>Studio:</strong> Torun, RAPACKIEGO 6
              </p>
            </div>
            <div>
              <p>
                <strong>Facebook:</strong>{" "}
                <a
                  href="https://www.facebook.com/LaktionovaMarina8009"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Profile
                </a>
              </p>
              <p>
                <strong>Facebook:</strong>{" "}
                <a
                  href="https://www.facebook.com/laktionovamaryna"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Works
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="right-column">
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Name and Email */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Subject and Message */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            {/* Submit Button */}
            <button className="contact-submit" type="submit">
              Submit
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M13 4l8 8-8 8M5 12h16" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
