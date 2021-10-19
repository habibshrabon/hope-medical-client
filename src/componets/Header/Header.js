import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-light navbar-bg">
        <div className="container">
          <Link className="navbar-brand  text-info fw-bold fs-1" to="/home">
            HEALTH AND HOPE HOSPITAL
          </Link>
          <div className="py-3 fw-bold">
            <Link className="text-decoration-none px-3" to="/home">
              Home
            </Link>
            <Link className="text-decoration-none px-3" to="/services">
              Services
            </Link>
            <Link className="text-decoration-none px-3" to="/doctors">
              Doctors
            </Link>
            <Link className="text-decoration-none px-3" to="/appointment">
              Appointment
            </Link>
            {user?.email ? (
              <FontAwesomeIcon onClick={logOut} icon={faSignOutAlt} />
            ) : (
              <Link className="text-decoration-none px-3" to="/login">
                Login
              </Link>
            )}
            <span className="text-decoration-none px-3 text-black fs-3">
              {user?.displayName}{" "}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
