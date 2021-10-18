import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-light bg-black">
        <div className="container">
          <Link className="navbar-brand  text-info fw-bold fs-1" to="/home">
            HEALTH AND HOPE HOSPITAL
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
              to="/doctors"
            >
              Doctors
            </Link>
            <Link
              className="text-decoration-none px-3  text-white"
              to="/appointment"
            >
              Appointment
            </Link>
            {user?.email ? (
              <button onClick={logOut}>LogOut</button>
            ) : (
              <Link
                className="text-decoration-none px-3  text-white"
                to="/login"
              >
                Login
              </Link>
            )}
            <span className="text-decoration-none px-3 text-white">
              {user?.displayName}{" "}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
