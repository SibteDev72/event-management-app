import { LogIn, SignUp } from "@/types/Auth";
import Router from "next/router";

const baseURL = "http://localhost:8000";

export const Signup = async (data: SignUp) => {
  try {
    const response = await fetch(`${baseURL}/user/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result.status === "User Added In MongoDB") {
      alert("User Registered");
      Router.push("/logIn");
    } else alert("User Already Register with this Email");
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const Login = async (data: LogIn) => {
  try {
    const response = await fetch(`${baseURL}/user/logIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result && result.status !== "User not found") {
      localStorage.setItem("User Info", JSON.stringify(result.user));
      localStorage.setItem("User Status", "LoggedIn");
      return { status: "User Found" };
    } else {
      return { status: "User Not Registered" };
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
