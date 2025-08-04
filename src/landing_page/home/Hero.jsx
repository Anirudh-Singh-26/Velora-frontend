import React from "react";
import { Link } from "react-router-dom";

function Hero () {
    return (
      <>
        <section className="hero-section">
          <div className="hero-content mt-5">
            <h1>
              Built for <span className="highlight blue">smart investing</span>
              <br />
              <span className="highlight purple mt-2">
                designed for market speed
              </span>
            </h1>
            <p>
              Empowering traders with real-time data, low brokerage, and
              powerful tools to grow your wealth effortlessly.
            </p>
            <div className="hero-buttons">
              <Link to="/signup">
                <button className="btn primary">Open Account →</button>
              </Link>
              <Link to="/signup">
                <button className="btn secondary">Explore Features →</button>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
}

export default Hero;