import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{backgroundColor:"white",height:"4.4rem"}} className="navbar sticky-top navbar-expand-lg border-bottom">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">
          <img src='media\images\logo.svg' style={{width:"20%",marginLeft:"10rem"}}/>

        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/signup" onClick={() => window.scrollTo(0, 0)}>
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about" onClick={() => window.scrollTo(0, 0)}>
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link"to="/product" onClick={() => window.scrollTo(0, 0)}>
                Product
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/pricing" onClick={() => window.scrollTo(0, 0)}>
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/support" onClick={() => window.scrollTo(0, 0)}>
                Support
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" >
                <i style={{marginTop:"5px"}} class="fa-solid fa-bars"></i>
              </a>
            </li>
          </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
