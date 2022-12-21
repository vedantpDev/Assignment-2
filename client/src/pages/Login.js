import React, { useState } from "react";
import "../css/Login.css";
import { getToken } from "../Actions/dataAction";
import { useDispatch } from "react-redux";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Login = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getToken(loginData));
  };

  return (
    <div>
      <Header />
      <form className="form">
        <h2>Login Form</h2>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            onChange={changeHandler}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={changeHandler}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button
          onClick={submitHandler}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
