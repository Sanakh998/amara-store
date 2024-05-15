import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar bg-berkeley">
      <div className="container-fluid">
        <Link to={'/'}>
          <h5 className="m-0 ms-2 text-honeydew">Amara Store</h5>
        </Link>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-danger px-3" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
