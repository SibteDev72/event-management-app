import { LogIn, SignUp } from "@/types/Auth";

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
    console.log("Success:", result);
    return result;
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
    console.log("Success:", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
