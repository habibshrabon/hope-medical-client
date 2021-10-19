import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, description } = service;
  return (
    <>
      <div className="col-md-4 mb-3">
        <div className="card h-100 card-bg shadow">
          <img
            src={img}
            style={{ height: "275px" }}
            className="card-img-top justify-content-center align-items-center img-fluid"
            alt={name}
          />
          <div className="card-body">
            <h3 className="card-title text-center">{name}</h3>
            <p>{description}</p>
            <Link to={`/details/${id}`}>
              <button className="btn btn-info px-3 ms-auto">
                Details {name.toLowerCase()}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
