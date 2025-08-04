import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/signup`,
        formData,
        {
          withCredentials: true,
        }
      );
      alert(res.data.msg);
      navigate("/login");
    } catch (err) {
      setError("Signup failed");
    }
  };

  return (
    <div className="signup-container">
      {/* Left: FORM */}
      <div className="signup-right">
        <div className="nav-switch nav-right">
          <span>Have an account?</span>
          <a href="/login">Sign In</a>
        </div>

        <div className="signup-box">
          <h2>Create Account</h2>
          <p className="subtext">Start your journey with us</p>

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
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
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
              Get Started
            </button>
          </form>
        </div>
      </div>

      {/* Right: IMAGE */}
      <div className="signup-left">
        <img
          src="https://images.unsplash.com/photo-1639754391037-98dd3cb74e09?q=80&w=687&auto=format&fit=crop"
          alt="Signup Illustration"
          className="signup-full-image fade-left"
        />
      </div>
    </div>
  );
}

export default Signup;
