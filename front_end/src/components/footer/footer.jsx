import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-text-container">
        <div className="footer-1">
          <div>About us</div>
          <div>Contect us</div>
        </div>
        <div className="footer-2">
          <p> Phone : 8346789034 </p>
          <p> email: cdsnckjd@gmail.com </p>
        </div>
      </div>
      <div className="copy-right">
        <p>© Copyright Agency and contributors 2022.</p>
      </div>
    </div>
  );
};

export default Footer;
