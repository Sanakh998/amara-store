import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <div>
      <Link to={-1} className="btn btn-danger my-3 ms-2 px-3">
        Back
      </Link>
    </div>
  );
};

export default BackButton;
