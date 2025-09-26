import { createEvent } from "@/pages/api/Event";
import { EventDetails } from "@/types/Event";
import React, { useEffect, useState } from "react";

const PreviewEvent = () => {
  const [eventDetails, setEventDetails] = useState<EventDetails>({
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
  useEffect(() => {
    const storedEvent = localStorage.getItem("EventDetails");
    if (storedEvent) {
      try {
        const parsedEvent: EventDetails = JSON.parse(storedEvent);
        setEventDetails(parsedEvent);
      } catch (error) {
        console.error("Failed to parse EventDetails:", error);
      }
    }
  }, []);

  const handlePublish = async () => {
    const userToken = localStorage.getItem("User Token");
    if (userToken) {
      await createEvent(eventDetails, userToken);
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 py-6 w-full flex flex-col gap-6 md:gap-12">
      <p className="text-sm lg:text-lg text-heading">
        Nearly there! Check everything’s correct.
      </p>
      <div className="w-full flex flex-col gap-8 xs:px-4 sm:px-6 md:px-12 lg:px-14 xl:px-[8rem]">
        <div className="border-2 border-heading rounded-xl p-4 md:p-8 flex flex-col gap-2 w-full self-center">
          <img
            src={
              eventDetails?.eventImageUrl || "/assets/Event_Image_Skeleton.png"
            }
            alt="Event Cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "/assets/Event_Image_Skeleton.png";
            }}
            className="w-full h-auto rounded-xl"
          />
          <div className="flex flex-col gap-6 px-2 lg:px-6">
            <p className="text-xl lg:text-2xl font-bold">
              {eventDetails.eventTitle}
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold text-heading">
                Date and Time
              </p>
              <p className="text-sm font-medium text-heading">
                Date: {eventDetails.startDate}
              </p>
              <p className="text-sm font-medium text-heading">
                Time: {eventDetails.startTime}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold text-heading">Location</p>
              <p className="text-sm font-medium text-heading">
                {eventDetails.location}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold text-heading">
                Ticket Information
              </p>
              <p className="text-sm font-medium text-heading capitalize">
                Ticket Type: {eventDetails.ticketType}
              </p>
              {eventDetails.ticketType === "ticketed" && (
                <>
                  <p className="text-sm font-medium text-heading capitalize">
                    Ticket Name: {eventDetails.ticketName}
                  </p>
                  <p className="text-sm font-medium text-heading capitalize">
                    Ticket Price: {eventDetails.ticketPrice}Rs
                  </p>
                </>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold text-heading">
                Event Description
              </p>
              <p className="text-xs xs:text-sm text-heading capitalize">
                {eventDetails.description}
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={handlePublish}
          className="self-end bg-[#2B293D] max-w-max font-medium rounded-md px-6 py-2 text-sm text-white"
        >
          Publish Event
        </button>
      </div>
    </div>
  );
};

export default PreviewEvent;
