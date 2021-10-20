import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const ExactData = details.filter((td) => td.id === id);

  return (
    <div className="container my-5">
      <h4 className="fw-bold fs-3 mb-5 text-center">
        Service Details <hr />
      </h4>
      <div className="row">
        <div className=" col-md-5">
          <img
            className="rounded shadow-3 img-style"
            src={ExactData[0]?.img}
            alt=""
          />
        </div>
        <div className="col-md-7 align-items-center text-center">
          <h4 className="fw-bold fs-3 mb-5 mt-3">Item wise Details</h4>
          <h5>
            <span className="lh-lg text-danger">Name: </span>
            {ExactData[0]?.name}
          </h5>
          <h5>
            <span className="lh-lg text-danger">Specialty: </span>
            {ExactData[0]?.title}
          </h5>
          <button className="btn btn-style px-3 ms-auto">
            <FontAwesomeIcon icon={faArrowRight} /> Contact Us{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
