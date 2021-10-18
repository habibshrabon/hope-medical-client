import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/ooops.jpg";

const NotFound = () => {
  return (
    <div>
      <img style={{ width: "100%" }} src={image} alt="404" />
      <Link to="/">
        <button className="btn-warning">Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
