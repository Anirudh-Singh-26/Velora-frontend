import React from "react";
import { Link } from "react-router-dom";

function Universe() {
    return (
      <div className="container ">
        <div className="row text-center ">
          <h1>The Our Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="row text-center">
          <div className="col-4 p-3 mt-5">
            <img src="/media/images/tijori.svg" style={{ width: "45%" }} />
            <p className="text-small text-muted mt-3">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img
              src="/media/images/sensibullLogo.svg"
              style={{ width: "60%" }}
            />
            <p className="text-small text-muted mt-5">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="/media/images/tijori.svg" style={{ width: "45%" }} />
            <p className="text-small text-muted mt-3">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="col-4 p-3 mt-3">
            <img src="/media/images/streakLogo.png" style={{ width: "40%" }} />
            <p className="text-small text-muted mt-4">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-3 mt-4">
            <img
              src="/media/images/smallcaseLogo.png"
              style={{ width: "50%" }}
            />
            <p className="text-small text-muted mt-4">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-3 mt-4">
            <img src="/media/images/dittoLogo.png" style={{ width: "40%" }} />
            <p className="text-small text-muted mt-4">
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
          <Link
              to="/signup">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up Now
          </button>
          </Link>
        </div>
      </div>
    );
}

export default Universe;