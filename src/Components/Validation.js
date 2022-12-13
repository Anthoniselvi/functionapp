// import React from "react";

const Validation = (signupData) => {
  let errors = {};

  if (!signupData.name) {
    errors.name = "Name is required";
  }
  //   else if (!/^[a-zA-Z]+$/.test(registerData.name)) {
  //     errors.name = "Name is invalid";
  //   }

  if (!signupData.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(signupData.email)) {
    errors.email = "Email is invalid";
  }

  if (!signupData.password) {
    errors.password = "Password is required";
  } else if (signupData.password.length < 5) {
    errors.password = "Password must be more than 5 character";
  }
  return errors;
};
export default Validation;
