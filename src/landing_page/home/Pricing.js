import React from "react";

const Pricing = () => {
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-6 p-5">
          <h1 className="mb-3">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-6 p-5 d-flex">
          <img style={{ width: "20%" }} src="media\images\pricing0.svg" />
          <p style={{ fontSize: "0.7rem" }} className="mt-5 mr-3">
            Free account opening
          </p>
          <img style={{ width: "20%" }} src="media\images\pricing0.svg" />
          <p style={{ fontSize: "0.7rem" }} className="mt-5 mr-3">
            Free equity delivery and direct mutual funds
          </p>
          <img style={{ width: "20%" }} src="media\images\intradayTrades.svg" />
          <p style={{ fontSize: "0.7rem" }} className="mt-5 mr-3">
            Intraday and F&O
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
