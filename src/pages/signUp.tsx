import React from "react";
import SignUp from "../../components/auth/SignUp";
import AuthLayout from "../../components/auth/AuthLayout";

const signUp = () => {
  return <AuthLayout children={<SignUp />} />;
};

export default signUp;
