import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description } = service;
  return (
    <>
      <div className="col-md-4 mb-3 ">
        <div className="card h-100 card-bg opacity box-shadow">
          <img
            src={img}
            style={{ height: "275px" }}
            className="card-img-top justify-content-center align-items-center img-fluid"
            alt={name}
          />
          <div className="card-body">
            <h3 className="card-title text-center">{name}</h3>
            <p className="text-style">{description}</p>
            <Link to={`/details/${id}`}>
              <button className="btn btn-style px-3 ms-auto">
                <FontAwesomeIcon icon={faArrowRight} /> Details{" "}
                {name.toLowerCase()}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
