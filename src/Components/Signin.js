import React from "react";
import "./style.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { auth, google, facebook } from "./firebase";
import { signInWithPopup } from "firebase/auth";

function Signin() {
  const navigate = useNavigate();

  const login = async (provider) => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };

  function moveToFrontPage() {
    navigate("/FrontPage");
  }

  function moveToEvent() {
    navigate("/eventslist");
  }
  return (
    <div className="signin_container">
      <div className="signin_top_container">
        <div className="signin_top_navbar">
          <AiOutlineArrowLeft onClick={moveToFrontPage} />
          <p className="signin_top_head">Login</p>
        </div>
        <h1>Sign In</h1>
        <p className="signin_para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="signin_bottom_container">
        <input
          className="signin_input"
          type="text"
          placeholder="Mobile Number"
          // onChange={handleAddEventChange}
          name="number"
        />
        <input
          className="signin_input"
          type="password"
          placeholder="Password"
          // onChange={handleChange}
          name="date"
        />
        <a href="" className="sigin_forget">
          <p className="signin_forget_para">Forget Password?</p>
        </a>
        <button className="signin_sign_button" onClick={moveToEvent}>
          Sign In
        </button>
        <div className="signin_google" onClick={() => login(google)}>
          <FcGoogle />
          <p>Continue with Google</p>
          <AiOutlineArrowRight />
        </div>
        <div className="signin_facebook" onClick={() => login(facebook)}>
          <BsFacebook />
          <p>Continue with Facebook</p>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Signin;
