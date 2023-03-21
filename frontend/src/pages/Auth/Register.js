import React, { useState } from "react";
import "../../styles/authStyles.css";
import {Link} from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [name, setName] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlecPassword = (e) => {
    setcPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !password || !cpassword || !email) {
      console.log("Please enter all required fields");
    }
  };

  return (
    <>
      <div className="container">
        <form className="form">
          <h2 className="header">Welcome to MetaX</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              placeholder="Enter your Name"
              value={name}
              onChange={handleName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter your email address"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="cpassword"
              placeholder="Enter your password Again"
              value={cpassword}
              onChange={handlecPassword}
            />
          </div>
          <Link to="/login" className="txt">
            Already a User? Login
          </Link>

          <button
            type="submit"
            onSubmit={handleSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
