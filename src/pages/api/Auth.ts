import { LogIn, SignUp } from "@/types/Auth";
import { User } from "@/types/User";
import Router from "next/router";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const Signup = async (data: SignUp): Promise<{ status: string }> => {
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
      return { status: "User Registered" };
    } else {
      alert("User Already Registered with this Email");
      return { status: "Already Registered" };
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const Login = async (
  data: LogIn
): Promise<{ status: string; user?: User }> => {
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
      localStorage.setItem("User Token", result.token);
      localStorage.setItem("User Status", "LoggedIn");
      return { status: "User Found", user: result.user };
    } else {
      return { status: "User Not Registered" };
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
