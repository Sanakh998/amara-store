import React from "react";
import { NavLink, Link } from "react-router-dom";
import NavLinks from "./NavLinks";
const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-md sticky-top bg-berkeley py-sm-3"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link to={"/"}>
          <h5 className="m-0 mx-2 text-honeydew">Amara Store</h5>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLinks title={"Home"} path={"/"} />
            <NavLinks title={"Jewelry"} path={"/products/jewelry"} />
            <NavLinks title={"Electronics"} path={"/products/electronics"} />
            <NavLinks
              title={"Men's Clothing"}
              path={"/products/men-clothing"}
            />
            <NavLinks
              title={"Women's Clothing"}
              path={"/products/women-clothing"}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
