import React, { useEffect, useState } from "react";
import { EventCategories } from "../../constant/data";
import { getEvent } from "@/pages/api/Event";
import { EventDetails } from "@/types/Event";
import EventCard from "../card/EventCard";

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState<string>("all");
  const [eventData, setEventData] = useState<EventDetails[]>([]);

  const handleEventAPI = async () => {
    const result: EventDetails[] = await getEvent(currentCategory);
    setEventData(result);
  };

  useEffect(() => {
    handleEventAPI();
  }, [currentCategory]);

  return (
    <div className="w-full flex flex-col gap-4 my-6 px-4">
      <div className="flex flex-row overflow-y-scroll gap-2">
        {EventCategories.map((category, index) => (
          <div
            key={index}
            onClick={() => setCurrentCategory(category)}
            className={`${
              currentCategory === category
                ? "text-white bg-primary"
                : "bg-transparent text-heading"
            } border-2 border-primary px-4 cursor-pointer capitalize rounded-full py-1`}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {eventData.map((data, index) => (
          <EventCard key={index} EventDetails={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
