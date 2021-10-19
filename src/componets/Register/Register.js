import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <form className="py-5 d-flex justify-content-center">
        <div className="container contact p-5 w-50">
          <h2 className="text-center pb-5">Registration From</h2>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="form-control my-3"
              type="text"
              placeholder="Your Mobile No."
            />
            <input
              className="form-control"
              type="text"
              placeholder="Your Email Address"
            />
            <textarea
              className="form-control mt-3"
              cols="0"
              rows="5"
              placeholder="Message"
            ></textarea>
            <input
              className="form-control my-3 btn-style"
              type="submit"
              value="Submit Registration"
            />
          </div>
        </div>
      </form>
      <Link to="/login">Already Registered?</Link>
    </div>
  );
};

export default Register;
