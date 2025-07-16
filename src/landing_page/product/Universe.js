import React from "react";

const Universe = () => {
  return (
    <div className="container text-center p-5 pt-2">
      <h1 className="mb-3">The Zerodha Universe</h1>
      <p >
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row p-5 pb-3">
        <div className="col-4">
          <img style={{width:"40%",marginBottom:"1rem"}} src="media\images\zerodhaFundhouse.png" />
          <p className="p-5 pt-0 text-muted" style={{fontSize:"0.8rem"}}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4">
          <img style={{width:"40%",marginBottom:"1rem"}} src="media\images\sensibullLogo.svg" />
          <p className="p-5 pt-0 text-muted" style={{fontSize:"0.8rem"}}>
            Options trading platform that lets you
            create strategies, analyze positions, and examine
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4">
          <img style={{width:"30%",marginBottom:"1rem"}} src="https://zerodha.com/static/images/partners/tijori.svg" />
          <p className="p-5 pt-0 text-muted" style={{fontSize:"0.8rem"}}>
            Investment research platform
            that offers detailed insights on stocks,
            sectors, supply chains, and more.

          </p>
        </div>
      </div>
      <div className="row p-5 pt-0 pb-2" >
        <div className="col-4">
          <img style={{width:"40%",marginBottom:"1rem"}} src="media\images\streakLogo.png" />
          <p className="p-5 pt-0 text-muted" style={{fontSize:"0.8rem"}}>
              Systematic trading platform
              that allows you to create and backtest
              strategies without coding.
          </p>
        </div>
        <div className="col-4">
          <img style={{width:"40%",marginBottom:"1rem"}} src="media\images\smallcaseLogo.png" />
          <p className="p-5 pt-0 text-muted" style={{fontSize:"0.8rem"}}>
            Thematic investing platform
            that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4">
          <img style={{width:"20%",marginBottom:"1rem"}} src="media\images\dittoLogo.png" />
          <p className="p-5 pt-0 text-muted" style={{fontSize:"0.8rem"}}>
            Personalized advice on life
            and health insurance. No spam
            and no mis-selling.
            Sign up for free
          </p>
        </div>
      </div>
      <button style={{width:"15rem",height:"3rem",fontSize:"1.3rem"}} className="btn btn-primary">Signup for free</button>
    </div>
  );
};

export default Universe;
