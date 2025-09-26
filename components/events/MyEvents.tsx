import { getUserEvents } from "@/pages/api/Event";
import { EventDetails } from "@/types/Event";
import React, { useEffect, useState } from "react";
import EventCard from "../card/EventCard";

const MyEvents = () => {
  const [eventData, setEventData] = useState<EventDetails[]>([]);

  const handleEventAPI = async (userID: string, userToken: string) => {
    const result: EventDetails[] = await getUserEvents(userID, userToken);
    setEventData(result);
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("User Info");
    const userToken = localStorage.getItem("User Token");
    if (userInfo && userToken) {
      const parsedUser = JSON.parse(userInfo);
      handleEventAPI(parsedUser._id, userToken);
    }
  }, []);
  return (
    <div className="w-full flex flex-col gap-5 my-6 px-4 lg:px-8">
      <p className="text-lg lg:text-xl xl:text-2xl font-bold text-heading">
        My Events
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {eventData.map((data, index) => (
          <EventCard key={index} EventDetails={data} />
        ))}
      </div>
    </div>
  );
};

export default MyEvents;
