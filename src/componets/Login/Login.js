import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, signInUsingGithub } = useAuth();
  return (
    <div>
      <form className="py-5 d-flex justify-content-center">
        <div className="container p-5 w-50">
          <h2 className="text-center pb-5">Login </h2>
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

            <input
              className="form-control my-3 btn-style"
              type="submit"
              value="Submit Registration"
            />
          </div>
        </div>
      </form>
      <div className="mx-5">
        <button onClick={signInUsingGoogle} className="btn btn-info">
          Google Sign In
        </button>
        <button onClick={signInUsingGoogle} className="btn btn-danger">
          Github sign In
        </button>
        <br />
        <Link to="/register">New user?</Link>
      </div>
    </div>
  );
};

export default Login;
