import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-bg py-5">
      <div className="container">
        <div className="footer ">
          <div>
            <img
              className="img-fluid"
              src="https://www.kokilabenhospital.com/images/reliance_logo.png"
              alt="logo of footer"
              width="150"
              height="50"
            />
          </div>
          <div className="ul-style">
            <ul>
              <li>
                <Link to="#">Medical News</Link>
              </li>
              <li>
                <Link to="#">Read Our Blogs</Link>
              </li>
              <li>
                <Link to="#">Drug / Medicines</Link>
              </li>
              <li>
                <Link to="#">Diagnose & Research</Link>
              </li>
            </ul>
          </div>
          <div className="ul-style">
            <ul>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Read FAQs</Link>
              </li>
              <li>
                <Link to="#">Our History</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row  text-white text-start mt-5">
          <div className="col-md-8 col-12">
            Copyrights &copy; 2021 Monirul Fahad
          </div>
          <div className="col-md-4 col-12">
            <div className="d-flex justify-content-between">
              <p>Privacy & Policy</p>
              <p>Terms of Services</p>
              <p>Company History</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer>
//       <div className="footer-bg text-white py-3 mt-5">
//         <div className="">
//           <Link
//             className="text-white"
//             href="http://www.reliancegroupindia.com/"
//             target="_blank"
//           >
//             <img
//               src="https://www.kokilabenhospital.com/images/reliance_logo.png"
//               width="110px"
//               height="46px"
//               alt=""
//             />
//           </Link>
//         </div>
//         <div className="pt-5">
//           <p>&copy; 2021 Health and Hope Hospital. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
