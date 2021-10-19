import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, signInUsingGithub } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelGoogleLogIn = () => {
    signInUsingGoogle().then(() => {
      history.push(redirect_uri);
    });
  };
  const handelEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handelPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handelRegistration = (e) => {
    console.log(email, password);
    e.preventDefault();
  };

  return (
    <div>
      <form className="py-5 d-flex justify-content-center">
        <div className="container p-5" style={{ maxWidth: "600px" }}>
          <h2 className="text-center pb-5">Please Login </h2>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="form-control my-3"
              type="text"
              onBlur={handelEmailChange}
              placeholder="Your Email Address"
              required
            />
            <input
              className="form-control"
              type="password"
              onBlur={handelPasswordChange}
              name=""
              id=""
              placeholder="your Password"
              required
            />

            <input
              className="form-control my-3 btn-style"
              onClick={handelRegistration}
              type="submit"
              value="Login"
            />
          </div>
        </div>
      </form>
      <div className="mb-5">
        <button onClick={handelGoogleLogIn} className="btn btn-info mx-3">
          Google Sign In
        </button>
        <button onClick={signInUsingGithub} className="btn btn-danger">
          Github sign In
        </button>
        <br />
        <Link className="pb-5 text-decoration-none text-black" to="/register">
          New user?
        </Link>
      </div>
    </div>
  );
};

export default Login;
