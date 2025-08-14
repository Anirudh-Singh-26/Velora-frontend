import React from "react";
import { Link } from "react-router-dom";

function Foooter() {
  return (
    <footer
      className="border-top foot"
      style={{ backgroundColor: "rgb(250, 250, 250)" }}
    >
      <div className="container mt-3 pt-2">
        <div className="row">
          <div className="col">
            <Link className="navbar-brand" to="/">
              <span className="brand-name">
                <b>VELORA</b>
              </span>
            </Link>
            <p>&copy; 2010 - 2025 Velora Broking Ltd. All rights reserved.</p>
          </div>

          <div className="col" style={{ textAlign: "center" }}>
            <p className="mb-2">Company</p>
            <a className="f-links text-muted" href="">
              About Us
            </a>
            <br />
            <a className="f-links text-muted" href="">
              Careers
            </a>
            <br />
            <a className="f-links text-muted" href="">
              Press
            </a>
          </div>

          <div className="col" style={{ textAlign: "center" }}>
            <p className="mb-2">Support</p>
            <a className="f-links text-muted" href="">
              Contact
            </a>
            <br />
            <a className="f-links text-muted" href="">
              Help Center
            </a>
            <br />
            <a className="f-links text-muted" href="">
              FAQs
            </a>
          </div>

          <div className="col" style={{ textAlign: "center" }}>
            <p className="mb-2">Account</p>
            <a className="f-links text-muted" href="">
              Open Account
            </a>
            <br />
            <a className="f-links text-muted" href="">
              Fund Transfer
            </a>
          </div>
        </div>

        <div className="mt-1 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Velora Broking Ltd.: Registered with NSE, BSE & MCX. SEBI
            Registration no.: INZ000031633. Depository services through Velora
            Broking Ltd.: IN-DP-431-2019. Commodity trading via Velora
            Commodities Pvt. Ltd. Registered Address: #153/154, 4th Cross,
            Dollars Colony, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India.
          </p>
          <p>
            For complaints: securities@velora.com | DP related: dp@velora.com.
            Please read the Risk Disclosure Document carefully. Keep your
            contact info updated to receive alerts about your transactions
            directly from the exchange.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Foooter;
