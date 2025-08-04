import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/login`,
        formData,
        { withCredentials: true }
      );
      alert(response.data.msg);
      // window.location.href = import.meta.env.VITE_CLIENT_DASHBOARD_URL;

      window.location.href = 'https://velora-dashboard-two.vercel.app/';
      
    } catch (err) {
      setError("Login failed");
    }
  };

  return (
    <div className="signup-container">
      {/* Left: IMAGE */}
      <div className="signup-left">
        <img
          src="https://images.unsplash.com/photo-1639754391037-98dd3cb74e09?q=80&w=687&auto=format&fit=crop"
          alt="Login Illustration"
          className="signup-full-image fade-right"
        />
      </div>

      {/* Right: FORM */}
      <div className="signup-right">
        <div className="nav-switch nav-left">
          <span>New here?</span>
          <a href="/signup">Sign Up</a>
        </div>

        <div className="signup-box">
          <h2>Sign In</h2>
          <p className="subtext">Welcome back! Continue with your username</p>

          {error && <div className="error-box">{error}</div>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
