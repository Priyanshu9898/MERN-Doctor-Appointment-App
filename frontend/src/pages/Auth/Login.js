import React, { useState } from "react";
import "../../styles/authStyles.css";
import {Link} from 'react-router-dom';


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 



  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password  || !email) {
      console.log("Please enter all required fields");
    }
  };
  return (
    <>
      <div className="container">
        <form className="form">
          <h2>Login</h2>
          
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
          
          <Link to="/register" className="txt">
            Don't Have an Account? Register
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
  )
}

export default Login