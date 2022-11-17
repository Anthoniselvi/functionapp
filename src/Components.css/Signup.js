import React from "react";
import FrontPage from "./FrontPage";
import Signin from "./Signin";
import "./style.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  function moveToFrontPage() {
    navigate("/FrontPage");
  }

  function moveToSignin() {
    navigate("/Signin");
  }
  return (
    <div className="signup_container">
      <div className="signup_top_container">
        <div className="signup_top_navbar">
          <AiOutlineArrowLeft onClick={moveToFrontPage} />
          <p className="signup_top_head">Register</p>
        </div>
        <h1>Sign Up</h1>
        <p className="signup_para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="signup_bottom_container">
        <form className="signup_form">
          <div className="signup_input_container">
            <label className="signup_label">Full Name</label>
            <input
              className="signup_input"
              type="text"
              name="fullname"
              //   value={values.fullname}
              //   onChange={handleChange}
            />
            {/* {errors.fullname && <p className="error">{errors.fullname}</p>} */}
          </div>
          <div className="signup_input_container">
            <label className="signup_label">Email</label>
            <input
              className="signup_input"
              type="email"
              name="email"
              //   value={values.email}
              //   onChange={handleChange}
            />
            {/* {errors.email && <p className="error">{errors.email}</p>} */}
          </div>
          <div className="signup_input_container">
            <label className="signup_label">Mobile Number</label>
            <input
              className="signup_input"
              type="text"
              name="phone"
              //   value={values.phone}
              //   onChange={handleChange}
            />
            {/* {errors.phone && <p className="error">{errors.phone}</p>} */}
          </div>

          <div className="signup_input_container">
            <label className="signup_label">Create Password</label>
            <input
              className="signup_input"
              type="password"
              name="password"
              //   value={values.password}
              //   onChange={handleChange}
            />
            {/* {errors.password && <p className="error">{errors.password}</p>} */}
          </div>

          <button className="signup_sign_button" onClick={moveToSignin}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
