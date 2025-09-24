import React, { useState } from "react";

interface RadioFormProps {
  label: string;
  values: string[];
  onChange: (value: string) => void;
}

const RadioForm = ({ label, values, onChange }: RadioFormProps) => {
  const [selected, setSelected] = useState("");

  const handleChange = (value: string) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-md text-heading">{label}</label>
      <div className="flex flex-col md:flex-row gap-4">
        {values.map((val, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="radio"
              value={val}
              checked={selected === val}
              onChange={() => handleChange(val)}
              className="cursor-pointer"
            />
            {val}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioForm;
