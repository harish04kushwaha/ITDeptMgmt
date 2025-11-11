import React, { useState } from "react";
import "./Login.css";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Login successful!");
      setFormData({ email: "", password: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      {/* <Header /> */}
      <div className="login-page">
        <div className="login-box">
          <h2>Welcome Back 👋</h2>
          <p className="subtitle">Login to continue to IT Department Portal</p>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <button type="submit">Login</button>
            <div className="login-links">
              <a href="/forgetpass">Forgot Password?</a>
              <a href="/signup">Create Account</a>
            </div>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Login;
