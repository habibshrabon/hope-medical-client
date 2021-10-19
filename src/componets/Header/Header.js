import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar className="fixed-sticky" bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand as={Link} className="web-name fw-bold fs-2" to="/">
          HOPE MEDICAL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="text-black" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-black" as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link className="text-black" as={Link} to="/doctors">
              Doctors
            </Nav.Link>
            <Nav.Link className="text-black" as={Link} to="/appointment">
              Appointment
            </Nav.Link>

            {user?.email ? (
              <Nav.Link className="text-black" onClick={logOut}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                LogOut
              </Nav.Link>
            ) : (
              <Nav.Link className="text-black" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Nav.Link className=" px-3 text-black">
              {user?.displayName}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

// const Header = () => {
//   const { user, logOut } = useAuth();
//   return (
//     <div>
//       <nav className="navbar navbar-light navbar-bg fixed-sticky">
//         <div className="container">
//           <Link className="navbar-brand  text-black fw-bold fs-1" to="/home">
//             HOPE MEDICAL
//           </Link>
//           <div className="py-3 fw-bold">
//             <Link className="text-decoration-none px-3" to="/home">
//               Home
//             </Link>
//             <Link className="text-decoration-none px-3" to="/services">
//               Services
//             </Link>
//             <Link className="text-decoration-none px-3" to="/doctors">
//               Doctors
//             </Link>
//             <Link className="text-decoration-none px-3" to="/appointment">
//               Appointment
//             </Link>
//             {user?.email ? (
//               <span onClick={logOut}>
//                 <FontAwesomeIcon icon={faSignOutAlt} />
//                 LogOut
//               </span>
//             ) : (
//               <Link className="text-decoration-none px-3" to="/login">
//                 Login
//               </Link>
//             )}
//             <span className="text-decoration-none px-3 text-black fs-3">
//               {user?.displayName}
//             </span>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;
