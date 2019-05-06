import React, {Component} from "react";
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";

const PreLogin = () => {
  return(
    <div className="login container d-flex flex-column align-items-center">
      <div className="logo">
        <img src={logo} alt=""/>
      </div>

      <h1>Welcome to Twister!</h1>
      <p>Already a member?</p>
      <Link to='/sign-in' className='btn btn-lg signin-btn'>Sign in</Link>
      <p>New to Twister?</p>
      <Link to='/sign-up' className='btn btn-lg signup-btn'>Create account</Link>
    </div>
  );
};

export default PreLogin;
