import { deleteEvent } from "@/pages/api/Event";
import { EventDetails } from "@/types/Event";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface EventCardProps {
  EventDetails: EventDetails;
}

const EventCard = ({ EventDetails }: EventCardProps) => {
  const router = useRouter();
  const [bgImage, setBgImage] = useState("/assets/Event_Image_Skeleton.png");

  const handleAPI = async (type: string, eventID: string) => {
    const userToken = localStorage.getItem("User Token");
    if (userToken) {
      type === "delete"
        ? await deleteEvent(eventID, userToken)
        : type === "edit"
        ? router.push({
            pathname: "/event/edit",
            query: { eventID: eventID },
          })
        : "";
    }
  };

  useEffect(() => {
    if (EventDetails?.eventImageUrl) {
      const img = new Image();
      img.src = EventDetails.eventImageUrl;
      img.onload = () => setBgImage(EventDetails.eventImageUrl);
      img.onerror = () => setBgImage("/assets/Event_Image_Skeleton.png");
    } else {
      setBgImage("/assets/Event_Image_Skeleton.png");
    }
  }, [EventDetails?.eventImageUrl]);
  return (
    <div className="w-full relative flex flex-col pb-2 shadow-sm bg-white shadow-black rounded-md">
      <div
        className="w-full h-[20vh] rounded-t-md bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <p className="z-50 absolute bottom-0 left-0 bg-primary text-sm font-medium px-4 py-1 rounded-t-md capitalize text-white">
          {EventDetails.eventCategory}
        </p>
      </div>
      <p className="text-sm md:text-lg font-medium capitalize px-4 mt-4">
        {EventDetails.eventTitle}
      </p>
      <p className="text-heading px-4 mt-1">
        Published By: {EventDetails.user_info.user_name}
      </p>
      <div className="flex flex-col gap-3 px-4 mt-4">
        <p className="text-sm line-clamp-2 capitalize">
          {EventDetails.description}
        </p>
        <div className="text-heading text-xs md:text-sm flex flex-row items-center gap-2">
          <img src="/assets/location.png" className="w-4 md:w-5 h-auto" />
          {EventDetails.location}
        </div>
        <div className="text-heading text-xs md:text-sm flex flex-row items-center gap-2">
          <img src="/assets/calendar.png" className="w-4 md:w-5 h-auto" />
          {EventDetails.startDate}
        </div>
        <div className="text-heading text-xs md:text-sm flex flex-row items-center gap-2">
          <img src="/assets/clock.png" className="w-4 md:w-5 h-auto" />
          {EventDetails.startTime} to {EventDetails.endTime}
        </div>
        <p className="text-sm font-medium capitalize">
          {EventDetails.eventType}
        </p>
        <div className="text-heading text-xs md:text-sm flex flex-row items-center gap-2 capitalize">
          <img src="/assets/ticket.png" className="w-4 md:w-5 h-auto" />
          {EventDetails.ticketType}
        </div>
        {EventDetails.ticketType === "ticketed" && (
          <div className="text-heading text-sm flex flex-row items-center gap-2 capitalize">
            <p className="font-medium">{EventDetails.ticketName}</p>
            <p>{EventDetails.ticketPrice} Rs</p>
          </div>
        )}
      </div>
      {router.pathname === "/event/myEvents" && (
        <div className="absolute bottom-3 right-3 mx-3 flex flex-row gap-2">
          <button
            // @ts-ignore
            onClick={() => handleAPI("edit", EventDetails._id)}
            className="bg-primary text-white rounded-md px-4 py-1 text-sm font-medium"
          >
            Edit
          </button>
          <button
            // @ts-ignore
            onClick={() => handleAPI("delete", EventDetails._id)}
            className="bg-primary text-white rounded-md px-4 py-1 text-sm font-medium"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default EventCard;
