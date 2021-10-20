import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import image from "../../images/appointment-banner.png";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div>
      <section className="container">
        <div className="row align-items-center pb-5">
          <div className="col-md-6 p-5  box-shadow opacity">
            <h2 className="text-center">Search Doctor</h2>
            <h2 className="text-info">Make an Appointment</h2>
            <p className="mb-5">
              Discover the best doctors the city nearest to you
            </p>
            <div class="row">
              <div class="col-md-6 pb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Doctors Name"
                  aria-label=""
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Department"
                  aria-label=""
                />
              </div>
            </div>
            <button className="btn-style px-3 py-2 mt-5 rounded-3 ">
              <FontAwesomeIcon icon={faArrowRight} /> Make Appointment
            </button>
          </div>
          <div className="col-md-6">
            <img className="img-fluid p-5" src={image} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
