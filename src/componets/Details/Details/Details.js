import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

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
      <h4 className="fw-bold fs-3 mb-5">
        Service Details <hr />
      </h4>
      <div className="row  align-items-center">
        <div className=" col-md-5">
          <img
            style={{ height: "275px" }}
            className="rounded shadow"
            src={ExactData[0]?.img}
            alt=""
          />
        </div>
        <div className="col-md-7">
          <h4 className="fw-bold fs-3 mb-5">Item wise Details</h4>

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
