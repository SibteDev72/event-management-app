import React, { useState } from "react";
import InputForm from "../inputs/InputForm";
import { Signup, Login } from "../../src/pages/api/Auth";
import Router from "next/router";

interface AuthFormProps {
  type: string;
}

const AuthForm = ({ type }: AuthFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleOnChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    type === "SignUp"
      ? await Signup({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        })
      : await Login({
          email: formData.email,
          password: formData.password,
        });
  };
  return (
    <div className="z-50 -mt-4 md:mt-0 md:-ml-4 rounded-t-2xl md:rounded-l-2xl bg-white w-full md:w-[60vw] lg:w-[70vw] h-full md:h-[100vh] p-10 lg:px-[10rem] xl:px-[12rem] flex flex-col justify-center">
      <h1 className="text-black text-2xl font-bold my-4">
        {type === "SignUp" ? "Create Account" : "Log In"}
      </h1>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        {type === "SignUp" ? (
          <InputForm
            label="Full Name"
            type="text"
            placeholder="Enter your Full Name"
            onChange={(value) => handleOnChange("fullName", value)}
          />
        ) : (
          ""
        )}

        <InputForm
          label="Email Address"
          type="email"
          placeholder="Enter your Email Address"
          onChange={(value) => handleOnChange("email", value)}
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="Enter Password"
          onChange={(value) => handleOnChange("password", value)}
        />
        <button
          type="submit"
          className="w-full h-full bg-[#2D2C3C] text-white py-3 rounded-md"
        >
          {type === "SignUp" ? "Create Account" : "Log In"}
        </button>
      </form>
      <div className="w-full flex flex-row gap-2 my-4">
        <p className="text-subheading text-sm">
          {type === "SignUp"
            ? "Already have an account?"
            : "Don't have an account?"}
        </p>
        <p
          className="text-black text-sm cursor-pointer"
          onClick={() => {
            type === "SignUp" ? Router.push("/") : Router.push("/signUp");
          }}
        >
          {type === "SignUp" ? "Login" : "SignUp"}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
