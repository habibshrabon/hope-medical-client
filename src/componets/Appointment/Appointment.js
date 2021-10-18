import React from "react";
import image from "../../images/appointment-banner.png";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div>
      <section className="container">
        <h2 className="text-center py-5">Make an Appointment</h2>
        <div className="row align-items-center pb-5">
          <div className="col-md-6 p-5">
            <p>Discover the best doctors the city nearest to you</p>
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Doctors Name"
                  aria-label=""
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Department"
                  aria-label=""
                />
              </div>
            </div>
            <button className="btn-info px-3 py-3 mt-5 rounded-3 ">
              Make Appointment
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
