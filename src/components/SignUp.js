import React from "react";
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';

const SignUp = () => {
  return(
    <div className="login container d-flex flex-column align-items-center">
      <div className="logo">
        <img src={logo} alt=""/>
      </div>

      <h1>Create an account</h1>

      <form>
        <div className="form-group">
          <label for="username">Username</label>
          <input type="text" className="form-control" id="username" placeholder="Choose a cool username" />
        </div>
        <div className="form-group">
          <label for="email">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="you@youremail.com" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Choose a strong password"/>
          <small id="passwordHelp" className="form-text text-muted">Password must have at least 8 caracters, 1 uppercase letter,<br/> 1 lowercase letter and 1 special caracter.</small>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="cgu" required/>
          <label className="form-check-label" for="cgu">I agree to Twister's terms of use</label>
        </div>
        <button type="submit" className="btn btn-lg signup-btn w-100">Create account</button>
      </form>
      <Link to='/' className="mt-2 link">Back to welcome page</Link>
    </div>
  );
};

export default SignUp;
