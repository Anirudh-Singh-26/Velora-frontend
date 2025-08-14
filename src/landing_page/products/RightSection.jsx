import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
  moveUp, // new prop
}) {
  return (
    <div className="container">
      <div className={`row-wrapper ${moveUp ? "move-up-component" : ""}`}>
        <div className="row px-5">
          <div className="col-6 p-5 mt-5">
            <h1>{productName}</h1>
            <p className="mt-4">{productDescription}</p>
            <div>
              <a href={learnMore} style={{ textDecoration: "none" }}>
                Learn More&nbsp;
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          <div className="col-6">
            <img src={imageUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
