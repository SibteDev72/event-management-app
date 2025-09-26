import React from "react";

interface DropdownFormProps {
  label: string;
  placeholder: string;
  values: string[];
  onChange: (value: string) => void;
}

const DropdownForm = ({
  label,
  placeholder,
  values,
  onChange,
}: DropdownFormProps) => {
  return (
    <div className="w-full md:w-[30vw] flex flex-col gap-2">
      <label className="text-md text-heading">{label}</label>
      <select
        className="border-2 capitalize bg-white border-subheading rounded-md py-2 px-3"
        defaultValue=""
        onChange={(e) => onChange(e.target.value)}
      >
        <option className="" value="" disabled>
          {placeholder}
        </option>
        {values.map((val, index) => (
          <option key={index} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownForm;
