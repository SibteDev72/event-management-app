import React from "react";

interface DatePickerProps {
  label: string;
  onChange: (date: string) => void;
}

const DatePicker = ({ label, onChange }: DatePickerProps) => {
  return (
    <div className="w-full md:w-[20vw] flex flex-col gap-2">
      <label className="text-md text-heading">{label}</label>
      <input
        type="date"
        className="border-2 border-subheading rounded-md py-2 px-3"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
