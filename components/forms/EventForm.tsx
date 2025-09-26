import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import InputForm from "../inputs/InputForm";
import DropdownForm from "../inputs/DropdownForm";
import RadioForm from "../inputs/RadioForm";
import DatePicker from "../inputs/DatePicker";
import TimePicker from "../inputs/TimePicker";
import TextArea from "../inputs/TextArea";
import { EventDetails } from "@/types/Event";
import { EventCategories } from "../../constant/data";

interface EventFormProps {
  type: string;
  data: EventDetails;
}

const EventForm = ({ data, type }: EventFormProps) => {
  const router = useRouter();

  const [formData, setFormData] = useState<EventDetails>(data);

  useEffect(() => {
    const userInfo = localStorage.getItem("User Info");
    if (userInfo) {
      try {
        const parsedUser = JSON.parse(userInfo);
        if (parsedUser) {
          const user_info: {
            user_id: string;
            user_name: string;
            user_email: string;
          } = {
            user_id: parsedUser._id,
            user_name: parsedUser.fullName,
            user_email: parsedUser.email,
          };
          setFormData((prev) => ({
            ...prev,
            user_info,
          }));
        }
      } catch (error) {
        console.error("Error parsing User Info:", error);
      }
    }
  }, []);

  const ticketOptions = [
    {
      value: "ticketed",
      title: "Ticketed Event",
      description: "My event requires tickets for entry",
    },
    {
      value: "free",
      title: "Free Event",
      description: "I’m running a free event",
    },
  ];

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("EventDetails", JSON.stringify(formData));
    alert("Event saved successfully!");
    router.push("/event/preview");
  };
  return (
    <form onSubmit={handleSubmit} className="w-full mt-4 flex flex-col gap-10">
      {/* Event Details */}
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl">Event Details</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <InputForm
            label="Event Title"
            type="text"
            placeholder="Enter the name of your event"
            onChange={(value) => handleChange("eventTitle", value)}
          />
          <DropdownForm
            label="Event Category"
            placeholder="please select one"
            values={EventCategories}
            onChange={(value) => handleChange("eventCategory", value)}
          />
        </div>
      </div>

      {/* Event Banner */}
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl">Event Banner</h2>
        <InputForm
          label="Event Image URL"
          placeholder="Enter URL"
          type="text"
          onChange={(value) => handleChange("eventImageUrl", value)}
        />
      </div>

      {/* Date & Time */}
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl">Date & Time</h2>
        <div className="flex flex-col gap-8">
          <RadioForm
            label="Event Type"
            values={["Single Event", "Recurring Event"]}
            onChange={(value) => handleChange("eventType", value)}
          />
          <div className="flex flex-col gap-4">
            <p className="text-lg text-heading font-medium">Session(s)</p>
            <div className="w-full flex flex-col md:flex-row gap-4 items-end">
              <DatePicker
                label="Start Date"
                onChange={(value) => handleChange("startDate", value)}
              />
              <TimePicker
                label="Start Time"
                onChange={(value) => handleChange("startTime", value)}
              />
              <TimePicker
                label="End Time"
                onChange={(value) => handleChange("endTime", value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Event Location */}
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl">Event Location</h2>
        <InputForm
          label="Where will your event take place?"
          placeholder="Enter Location"
          type="text"
          onChange={(value) => handleChange("location", value)}
        />
      </div>

      {/* Additional Information */}
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl">Additional Information</h2>
        <TextArea
          label="Event Description"
          placeholder="Describe what's special about your event & other important details."
          onChange={(value) => handleChange("description", value)}
        />
      </div>

      {/* Ticket Type */}
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl">What type of event are you running?</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {ticketOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => handleChange("ticketType", option.value)}
              className={`border-2 rounded-md w-full md:w-[24rem] h-[10rem] cursor-pointer flex flex-col gap-4 justify-center items-center transition-all duration-200 
              ${
                formData.ticketType === option.value
                  ? "bg-[#F6FBFF] border-heading scale-105 shadow-md"
                  : "border-subheading hover:border-heading"
              }`}
            >
              <p className="text-heading font-medium text-lg">{option.title}</p>
              <p className="text-subheading text-sm">{option.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${
          formData.ticketType === "ticketed" ? "flex flex-col gap-6" : "hidden"
        }`}
      >
        <h2 className="text-2xl">What tickets are you selling?</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <InputForm
            label="Ticket Name"
            placeholder="Enter Name"
            type="text"
            onChange={(value) => handleChange("ticketName", value)}
          />
          <InputForm
            label="Ticket Price"
            placeholder="0.00"
            type="number"
            onChange={(value) => handleChange("ticketPrice", value)}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="self-end bg-[#2B293D] max-w-max font-medium rounded-md px-6 py-2 text-sm text-white"
      >
        {type === "create" ? "Save" : "Edit"} & Preview
      </button>
    </form>
  );
};

export default EventForm;
