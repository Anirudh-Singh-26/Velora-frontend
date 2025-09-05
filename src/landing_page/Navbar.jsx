import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path) => location.pathname === path;

  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return; // only apply scroll logic on homepage

    const handleScroll = () => {
      const awardsSection = document.getElementById("awards");
      if (!awardsSection) return;

      const triggerPoint = awardsSection.offsetTop - 80; // 80px before Awards
      setScrolled(window.scrollY >= triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav
      className="navbar navbar-expand-lg ps-3 sticky-top"
      style={{
        backgroundColor: isHome
          ? scrolled
            ? "white"
            : "rgba(15, 23, 42, 1)" // dark navy before Awards
          : "white",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <span
            className="brand-name"
            style={{
              borderBottom: "2px solid rgba(122, 180, 250, 1)",
              color: isHome && !scrolled ? "rgba(122, 180, 250, 1)" : "",
            }}
          >
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
          <ul className="navbar-nav mx-auto d-flex align-items-center nav-gap">
            {["about", "product", "pricing", "support"].map((page) => (
              <li className="nav-item" key={page}>
                <Link
                  to={`/${page}`}
                  className={`nav-link nav-pill fw-medium ${
                    isActive(`/${page}`) ? "active-pill" : ""
                  }`}
                  style={{
                    color: isHome && !scrolled ? "white" : "black",
                  }}
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
              style={{
                backgroundColor: "rgb(56, 126, 209)",
                border: "none",
              }}
            >
              Get Started&nbsp;&nbsp;{" "}
              <i className="fa-solid fa-arrow-trend-up"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
