import React from "react";

function Hero(){
    return (
      <section className="container-fluid" id="supportHero">
        <div className="px-5 pt-5" id="supportWrapper">
          <h5>Support Portal</h5>
          <a href="">Track Tickets</a>
        </div>
        <div className="row px-5 mx-5">
          <div className="col-6 p-5">
            <h1 className="fs-3 mx-3">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input
              className="m-3"
              placeholder="Eg. how do I activate F&O, why is my order getting rejected.."
            />
            <br />
            <div className="m-3">
              <a href="" className="me-3">
                Track account opening
              </a>
              <a href="" className="me-3">
                Track segment activation
              </a>
              <a href="" className="me-3">
                Intraday margins
              </a>
              <a href="" className="me-3">
                Kite user manual
              </a>
            </div>
          </div>
          <div className="col-6 p-5">
            <h1 className="fs-3 mx-3">Featured</h1>
            <ol>
              <li>
                <a href="">Surveillance measure on scrips - June 2025</a>
              </li>
              <li>
                <a href="">Latest Intraday leverages and Square-off timings</a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    );
}

export default Hero;