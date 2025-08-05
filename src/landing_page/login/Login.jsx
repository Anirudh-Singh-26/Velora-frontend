import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/login`,
        formData,
        { withCredentials: true }
      );

      toast.success(response.data.msg || "Login successful!");

      setTimeout(() => {
        window.location.href = "https://velora-dashboard-two.vercel.app/";
      }, 1500);
    } catch (err) {
      console.error("Login error:", err);
      setError("Login failed. Please check your username and password.");
      toast.error("Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Left Image Section */}
      <div className="signup-left">
        <img
          src="https://images.unsplash.com/photo-1639754391037-98dd3cb74e09?q=80&w=687&auto=format&fit=crop"
          alt="Login Illustration"
          className="signup-full-image fade-right"
        />
      </div>

      {/* Right Form Section */}
      <div className="signup-right">
        <div className="nav-switch nav-left">
          <span>New here?</span>
          <a href="/signup">Sign Up</a>
        </div>

        <div className="signup-box">
          <h2 style= {{alignItems: "center", display: "flex", justifyContent: "center"}}>Welcome Back &nbsp; <img src="/media/images/hand.png" alt= "hand" style={{height: "3rem", width: "3.5rem"}} /> </h2>
          <p className="subtext">
            Enter your credentials to access your dashboard
          </p>

          {error && <div className="feedback-box error">{error}</div>}

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
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
