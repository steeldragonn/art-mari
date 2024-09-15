import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Your Company Name. All Rights Reserved.</p>
      <p>Contact us: info@yourcompany.com</p>
      <p>
        <a href="/privacy-policy">Privacy Policy</a> |{" "}
        <a href="/terms-of-service">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
