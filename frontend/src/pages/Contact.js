import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="right-column">
        <h1>CONTACT </h1>
        <h1> ME </h1>
      </div>
      <div className="left-column">
        <div className="contact-card">
          <p>
            <span className="boldText">Email:</span> meryy8009@gmail.com
          </p>
          <p>
            {" "}
            <span className="boldText">Facebook w works:</span>
            https://www.facebook.com/laktionovamaryna
          </p>
          <p>
            <span className="boldText">Facebook w me:</span>
            https://www.facebook.com/LaktionovaMarina8009
          </p>
          <p>
            <span className="boldText">Instagram:</span>
            https://www.instagram.com/meryy8009
          </p>
          <p>
            {" "}
            <span className="boldText">Studio:</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
