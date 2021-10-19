import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <form className="py-5 d-flex justify-content-center">
        <div className="container contact p-5" style={{ maxWidth: "600px" }}>
          <h2 className="text-center pb-5">Registration From</h2>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="form-control  my-3"
              type="text"
              placeholder="Your Email Address"
              required
            />
            <input
              className="form-control"
              type="password"
              name=""
              id=""
              placeholder="your Password"
              required
            />
            <textarea
              className="form-control mt-3"
              cols="0"
              rows="5"
              placeholder="Message"
            ></textarea>
            <input
              className="btn btn-style my-3 mx-3"
              type="submit"
              value="Submit Registration"
            />
            <Link className="text-decoration-none" to="/login">
              Already Registered?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
