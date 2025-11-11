import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
      <p className="footer-text">© 2025 IT Department Management System</p>
    </footer>
  );
}

export default Footer;
