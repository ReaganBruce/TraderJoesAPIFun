import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-danger">
        <div id="nav" className="justify-content-start">
          <img
            id="tj"
            src="https://media2.fdncms.com/memphisflyer/imager/u/original/15719807/trader-joes-logo.png"
          ></img>
        </div>
        <div className="container d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="">
              <Link to="/" className="btn btn-light btn-lg btn-block mx-3 mr-4 text-secondary">
                Home
              </Link>
            </li>
            <li className="">
              <Link to="/about" className="btn btn-light btn-lg btn-block mx-3 mr-4 text-secondary">
                About
              </Link>
            </li>
            <li className="">
              <Link to="/foods" className="btn btn-light btn-lg btn-block mx-3 mr-4 text-secondary">
               FOODS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
