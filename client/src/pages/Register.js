import React, { useState } from "react";
import "../css/Register.css";
import { registerData } from "../Actions/dataAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useFormik } from "formik";
import { signUpSchema } from "../schema";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [colletcData, setColletcData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: colletcData,
      validationSchema: signUpSchema,
      onSubmit: (value) => {
        dispatch(registerData(value));
        navigate("/");
      },
    });

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit} className="form">
        <h2>Register Form</h2>
        <div className="form-group">
          <label>Enter Name </label>
          <input
            type="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
            placeholder="Enter Name"
          />
          {errors.name && touched.name ? <p>{errors.name}</p> : ""}
        </div>
        {/* {errors.name} */}
        <div className="form-group">
          <label>Email ID</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
            placeholder="Enter email"
          />
          {errors.email && touched.email ? <p>{errors.email}</p> : ""}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control"
            placeholder="Password"
          />
          {errors.password && touched.password ? <p>{errors.password}</p> : ""}
        </div>
        <label>Choose your gender : </label>
        <div>
          <label className="check">Male</label>
          <input
            className="check"
            onChange={handleChange}
            // value={values.gender}
            type="radio"
            name="gender"
            id="male"
            value="male"
          />
          <label className="check">Female</label>
          <input
            type="radio"
            onChange={handleChange}
            className="check"
            name="gender"
            id="female"
            value="female"
          ></input>
        </div>

        <button
          // onClick={handleSubmit}
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

export default Register;
