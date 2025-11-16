// src/components/Navbar.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const PAGES = ["about", "product", "pricing", "support"];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const isActive = (path) => location.pathname === path;
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      const awardsSection = document.getElementById("awards");
      if (!awardsSection) return;
      const triggerPoint = awardsSection.offsetTop - 80;
      setScrolled(window.scrollY >= triggerPoint);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // close menu when resizing to desktop (avoid stale open state)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  // optional: close by clicking outside the collapse when open
  useEffect(() => {
    const onDocClick = (e) => {
      if (!open) return;
      if (!containerRef.current) return;
      // if click is inside containerRef (which contains the collapse and toggler) do nothing
      if (containerRef.current.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  return (
    <nav
      className="navbar navbar-expand-lg ps-3 sticky-top"
      style={{
        backgroundColor: isHome
          ? scrolled
            ? "white"
            : "rgba(15, 23, 42, 1)"
          : "white",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        className="container"
        ref={containerRef}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          paddingLeft: 0,
          position: "relative", // needed so absolute toggler sits relative to container
        }}
      >
        {/* Brand (no border/box) */}
        <Link
          className="navbar-brand"
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            minWidth: 0,
            gap: 8,
            paddingRight: 56, // leave room so absolute toggler doesn't overlap brand on mobile
          }}
        >
          <span
            className="brand-name"
            style={{
              /* removed border and box so no visible border */
              borderBottom: "none",
              border: "none",
              boxShadow: "none",
              padding: 0,
              color: isHome && !scrolled ? "rgba(122, 180, 250, 1)" : "",
              display: "inline-block",
              minWidth: 0,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <b>VELORA</b>
          </span>
        </Link>

        {/* spacer keeps brand flexible and prevents wrapping */}
        <div style={{ flex: "0 0 auto", minWidth: 0 }} />

        {/* Toggler (controlled by React) pinned to right via CSS rules we've already added.
            Inline placement kept; CSS from your final add-on should absolute-position it on mobile. */}
        <button
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="navbar-toggler"
          onClick={() => setOpen((s) => !s)}
          style={{
            background: "transparent",
            border: "none",
            padding: 8,
            flex: "0 0 auto",
            zIndex: 1300,
          }}
        >
          <span
            className={`navbar-toggler-icon ${open ? "is-open" : ""}`}
            style={{
              color: isHome && !scrolled ? "white" : "black", // inline color switch
            }}
          >
            <span></span>
          </span>
        </button>

        {/* Collapse: make this stretch and center its children on desktop */}
        <div
          id="navbarSupportedContent"
          className={`collapse navbar-collapse ${open ? "show" : ""}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flex: "1 1 auto", // <-- allow collapse to take available space
            justifyContent: "center", // <-- center the nav links
            minWidth: 0,
          }}
        >
          <ul
            className="navbar-nav mx-auto d-flex align-items-center nav-gap nav-list"
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              margin: 0,
              padding: 0,
              listStyle: "none",
              justifyContent: "center", // extra centering safety
              minWidth: 0,
            }}
          >
            {PAGES.map((page) => (
              <li className="nav-item" key={page} style={{ listStyle: "none" }}>
                <Link
                  to={`/${page}`}
                  className={`nav-link nav-pill fw-medium ${
                    isActive(`/${page}`) ? "active-pill" : ""
                  }`}
                  onClick={() => setOpen(false)}
                  style={{
                    color: isHome && !scrolled ? "white" : "black",
                    padding: "6px 10px",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                  }}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right CTA (keep it after nav center so it's visually on the right) */}
          <div className="d-flex" style={{ marginLeft: 8, flex: "0 0 auto" }}>
            <Link
              to="/signup"
              className="btn btn-primary px-4 py-2 fw-medium rounded-pill text-white"
              onClick={() => setOpen(false)}
              style={{
                backgroundColor: "rgb(56, 126, 209)",
                border: "none",
                whiteSpace: "nowrap",
              }}
            >
              Get Started&nbsp;
              <i className="fa-solid fa-arrow-trend-up" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
