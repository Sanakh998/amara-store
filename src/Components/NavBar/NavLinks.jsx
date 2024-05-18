import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({title, path}) => {
  return (
    <li className="nav-item">
      <NavLink className= {({isActive})=>isActive ? "nav-link active rounded px-3" : "nav-link text-honeydew px-3"}  to={path}>
        {title}
      </NavLink>
    </li>
  );
};

export default NavLinks;
