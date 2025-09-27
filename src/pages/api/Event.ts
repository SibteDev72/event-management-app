import { EventDetails } from "@/types/Event";
import Router from "next/router";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const createEvent = async (data: EventDetails, token: string) => {
  try {
    const response = await fetch(`${baseURL}/event/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.status === "Event Added In MongoDB") {
      alert("Event Created");
      Router.push("/");
    } else {
      alert("Error Occured");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getEvent = async (category: string) => {
  // http://localhost:8000/event/public/category/festive
  try {
    const response = await fetch(
      `${baseURL}/event/public/category/${category}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    if (result) {
      return result;
    } else {
      alert("Error Occured");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getUserEvents = async (userID: string, token: string) => {
  try {
    const response = await fetch(`${baseURL}/event/userID/${userID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    });
    const result = await response.json();
    if (result) {
      return result;
    } else {
      alert("Error Occured");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getEventByID = async (eventID: string, token: string) => {
  console.log(`${baseURL}/event/${eventID}`);
  try {
    const response = await fetch(`${baseURL}/event/${eventID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    });
    const result = await response.json();
    if (result) {
      // console.log(result);
      return result;
    } else {
      alert("Error Occured");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const updateEvent = async (
  data: EventDetails,
  eventID: string,
  token: string
) => {
  try {
    const response = await fetch(`${baseURL}/event/${eventID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.status === "Event Updated In MongoDB") {
      alert("Event Updated");
      Router.push("/event/myEvents");
    } else {
      alert("Error Occured");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const deleteEvent = async (eventID: string, token: string) => {
  try {
    const response = await fetch(`${baseURL}/event/${eventID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    });
    const result = await response.json();
    if (result) {
      alert(result.status);
      Router.reload();
    } else {
      alert("Error Occured");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
