import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/signup`,
        formData,
        { withCredentials: true }
      );

      toast.success(res.data.msg || "Signup successful!");

      // Delay redirect for 1.5s to show the toast
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.error(err);
      setError("Signup failed. Please try again.");
      toast.error("Signup failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Left: FORM */}
      <div className="signup-right">
        <div className="nav-switch nav-right">
          <span>Have an account?</span>
          <a href="/login">Sign In</a>
        </div>

        <div className="signup-box">
          <h2>Create Account</h2>
          <p className="subtext">Start your journey with us</p>

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
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Creating..." : "Get Started"}
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
