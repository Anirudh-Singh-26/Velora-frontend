import React from "react";
import {Link} from "react-router-dom"

function OpenAccount() {
  return (
    <div className="container open-account">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="mt-5">Open Account with Us</h1>
          <p>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <Link to="/signup">
            <button className="btn btn primary mb-5">Sign up Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
