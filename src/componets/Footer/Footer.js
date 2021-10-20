import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-bg py-5">
      <div className="container">
        <div className="footer ">
          <div className="text-white">
            <h2>Hope Medical</h2>
            <p>Powered By</p>
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
        <div className=" d-md-flex d-block justify-content-between text-white text-start mt-5">
          <div className="">
            <div className="d-flex justify-content-between">
              <p>Privacy & Policy</p>
              <p>Terms of Services</p>
              <p>Company History</p>
            </div>
          </div>
          <div className="pb-3">
            Copyrights &copy; 2021 Hope Medical. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
