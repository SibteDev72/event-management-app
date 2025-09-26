import React, { useEffect, useState } from "react";
import EventForm from "../forms/EventForm";
import { EventDetails } from "@/types/Event";
import { getEventByID } from "@/pages/api/Event";
import { useRouter } from "next/router";
import EventCard from "../card/EventCard";

const EditEvent = () => {
  const router = useRouter();
  const { eventID } = router.query;

  const [data, setData] = useState<EventDetails>({
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
  });

  const handleAPI = async () => {
    const userToken = localStorage.getItem("User Token");
    if (userToken) {
      const resut = await getEventByID(eventID as string, userToken);
      setData(resut);
    }
  };

  useEffect(() => {
    handleAPI();
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-12 py-6 flex flex-col gap-4">
      <div className="w-full md:px-[10rem] lg:px-[24rem]">
        <EventCard EventDetails={data} />
      </div>
      <EventForm type="edit" data={data} eventID={eventID as string} />
    </div>
  );
};

export default EditEvent;
