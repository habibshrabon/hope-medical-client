import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar className="navbar-bg" collapseOnSelect sticky="top" expand="lg ">
      <Container>
        <Navbar.Brand as={Link} className="fw-bold fs-2 text-white" to="/">
          HOPE MEDICAL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link className="text-white" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/doctors">
              Doctors
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/appointment">
              Appointment
            </Nav.Link>

            {user?.email ? (
              <Nav.Link className="text-white" onClick={logOut}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link className="text-white" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Nav.Link className=" px-3 text-white">
              {user?.displayName}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
