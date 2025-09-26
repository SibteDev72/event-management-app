import React from "react";
import EventForm from "../forms/EventForm";
import { EventDetails } from "@/types/Event";

const EditEvent = () => {
  const data: EventDetails = {
    user_info: {
      user_id: "",
      user_name: "",
      user_email: "",
    },
    eventTitle: "",
    eventCategory: "",
    eventImageUrl: "",
    eventType: "",
    startDate: "",
    startTime: "",
    endTime: "",
    location: "",
    description: "",
    ticketType: "",
    ticketName: "",
    ticketPrice: 0,
  };
  return (
    <div className="px-4 sm:px-6 md:px-12 py-6">
      <EventForm type="edit" data={data} />
    </div>
  );
};

export default EditEvent;
