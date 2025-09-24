import React, { useState } from "react";

interface TimePickerProps {
  label: string;
  onChange: (time: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ label, onChange }) => {
  const [selectedTime, setSelectedTime] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = e.target.value;
    setSelectedTime(time);
    onChange(time);
  };

  return (
    <div className="w-full md:w-[20vw] flex flex-col gap-2">
      <label className="text-md text-heading">{label}</label>
      <input
        type="time"
        value={selectedTime}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default TimePicker;
