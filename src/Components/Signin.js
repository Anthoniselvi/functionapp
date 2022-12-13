import React, { useState, useEffect } from "react";
import FrontPage from "./FrontPage";
import EventsForm from "./EventList";
import "./style.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import Validation from "./Validation";

function Signin() {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const moveToEvent = async (e) => {
    e.preventDefault();
    setErrors(Validation(loginData));
    setDataIsCorrect(true);

    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/MainItems");
    } catch (err) {
      setErr(true);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      // submitForm(true);
      alert("login successfully");
      navigate("/MainItems");
    }
  }, [errors]);

  function moveToFrontPage() {
    navigate("/FrontPage");
  }

  // function moveToEvent() {
  //   if (
  //     phone === localStorage.getItem("Phone") &&
  //     password === localStorage.getItem("Password")
  //   ) {
  //     // localStorage.setItem("isloggedin", true);
  //     // let a = localStorage.getItem("isloggedin");
  //     // console.log(a);
  //     alert("Login Successfully");
  //     navigate("/eventlist");
  //   } else {
  //     alert("Kindly enter correct login details");
  //     navigate("/signin");
  //   }
  // }
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
          type="email"
          placeholder="Enter Email"
          onChange={handleChange}
          name="email"
        />
        <input
          className="signin_input"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
        />
        <a href="" className="sigin_forget">
          <p className="signin_forget_para">Forget Password?</p>
        </a>
        <button className="signin_sign_button" onClick={moveToEvent}>
          Sign In
        </button>
        <div className="signin_google">
          <FcGoogle />
          <p>Continue with Google</p>
          <AiOutlineArrowRight />
        </div>
        <div className="signin_facebook">
          <BsFacebook />
          <p>Continue with Facebook</p>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Signin;
