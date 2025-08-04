import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // to get current route

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg ps-3 sticky-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <span className="brand-name">
            <b>VELORA</b>
          </span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse">
          {/* Center Links */}
          <ul className="navbar-nav mx-auto d-flex align-items-center nav-gap">
            {["about", "product", "pricing", "support"].map((page) => (
              <li className="nav-item" key={page}>
                <Link
                  to={`/${page}`}
                  className={`nav-link nav-pill text-dark fw-medium  ${
                    isActive(`/${page}`) ? "active-pill" : ""
                  }`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Button */}
          <div className="d-flex">
            <Link
              to="/signup"
              className="btn btn-primary px-4 py-2 fw-medium rounded-pill text-white"
              style={{ backgroundColor: "rgb(56, 126, 209)", border: "none" }}
            >
              Get Started&nbsp;&nbsp; <i className="fa-solid fa-arrow-trend-up"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
