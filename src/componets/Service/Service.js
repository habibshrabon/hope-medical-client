import React from "react";

const Service = ({ service }) => {
  const { name, img, description } = service;
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
            <button className="btn-info btn px-3 ms-auto">Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
