import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgetPass.css";

function ForgetPass() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your registered email address.");
      return;
    }

    // Later connect with backend API for password reset link
    setMessage("A password reset link has been sent to your email!");
  };

  return (
    <div className="forget-page">
      <div className="forget-box">
        <h2>Forgot Password?</h2>
        <p className="subtitle">
          Enter your registered email to reset your password
        </p>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {message && <p className="message">{message}</p>}

          <button type="submit">Send Reset Link</button>

          <div className="forget-links">
            <Link to="/login" className="back-link">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgetPass;
