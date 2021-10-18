import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-black">
        <div className="container">
          <Link className="navbar-brand  text-info fw-bold fs-1" to="/home">
            .......
          </Link>
          <div className="py-3">
            <Link className="text-decoration-none px-3  text-white" to="/home">
              Home
            </Link>
            <Link
              className="text-decoration-none px-3  text-white"
              to="/services"
            >
              Services
            </Link>
            <Link
              className="text-decoration-none px-3  text-white"
              to="/appointment"
            >
              Appointment
            </Link>
            <Link
              className="text-decoration-none px-3  text-white"
              to="/contact"
            >
              Contact Us
            </Link>
            <button className="btn-danger px-3 ">Login</button>
          </div>
        </div>
      </nav>
      <Banner />
    </div>
  );
};

export default Header;
