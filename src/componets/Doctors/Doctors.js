import React from "react";
import doctors1 from "../../images/doc-1.jpg";
import doctors2 from "../../images/doc-2.jpg";
import doctors3 from "../../images/doc-3.jpg";

const Doctors = () => {
  return (
    <div className="container">
      <h2>Meet Our Doctors</h2>
      <p>
        Our administration and support staff all have exceptional people skills
        and trained to assist you with all medical enquiries.
      </p>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card h-100 card-bg shadow">
            <img
              src={doctors1}
              style={{ height: "275px" }}
              className="card-img-top justify-content-center align-items-center img-fluid"
              alt=""
            />
            <div className="card-body">
              <h3 className="card-title text-center">Richard Muldoone</h3>
              <p>Specialty - Senior Consultant, Orthopedics</p>
              <p>Degree - MBBS, MS (Orthopedic)</p>
              <button className="btn-info btn px-3 ms-auto">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card h-100 card-bg shadow">
            <img
              src={doctors2}
              style={{ height: "275px" }}
              className="card-img-top justify-content-center align-items-center img-fluid"
              alt=""
            />
            <div className="card-body">
              <h3 className="card-title text-center">Richard Muldoone</h3>
              <p>Cardiology Specialist</p>
              <p>
                Degree - MBBS, MD (Cardiology), FAPSIC, FSCAI (USA), FACC (USA)
              </p>
              <button className="btn-info btn px-3 ms-auto">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card h-100 card-bg shadow">
            <img
              src={doctors3}
              style={{ height: "275px" }}
              className="card-img-top justify-content-center align-items-center img-fluid"
              alt=""
            />
            <div className="card-body">
              <h3 className="card-title text-center">Richard Muldoone</h3>
              <p>Specialty - Associate Consultant - Oncology</p>
              <p>Degree - MBBS, FCPS</p>
              <button className="btn-info btn px-3 ms-auto">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
