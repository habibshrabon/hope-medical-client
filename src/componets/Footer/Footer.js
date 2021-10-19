import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black text-white py-3 mt-5">
        <div className="">
          <Link
            className="text-white"
            href="http://www.reliancegroupindia.com/"
            target="_blank"
          >
            <img
              src="https://www.kokilabenhospital.com/images/reliance_logo.png"
              width="110px"
              height="46px"
              alt=""
            />
          </Link>
        </div>
        <div className="pt-5">
          <p>&copy; 2021 Health and Hope Hospital. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
