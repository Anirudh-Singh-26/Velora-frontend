import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center py-5" style={{ minHeight: "70vh" }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8">
          
          <h1 className="display-4" style={{fontSize: "12rem", letterSpacing: "3rem", transform: "scale(.8, 1.2)", fontWeight: "400"}}>404</h1>
          <h2 className="mb-3 text-muted">Page Not Found</h2>
          <p className="mb-4">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn btn primary px-4 py-2 rounded-pill">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
