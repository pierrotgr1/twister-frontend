import React from "react";
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

const SignIn = () => {
  return(
    <div className="login container d-flex flex-column align-items-center">
      <div className="logo">
        <img src={logo} alt=""/>
      </div>

      <h1>Welcome back!</h1>

      <form>
        <div className="form-group">
          <label for="email">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="you@youremail.com" />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password"/>
        </div>
        <button type="submit" className="btn btn-lg signup-btn w-100 mt-3">Sign in</button>
      </form>
      <Link to='/' className="mt-2 link">Back to welcome page</Link>
    </div>
  );
};

export default SignIn;
