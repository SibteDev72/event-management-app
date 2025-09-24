import React, { useState } from "react";

interface InputFormProps {
  label: string;
  type: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const InputForm = ({ label, type, placeholder, onChange }: InputFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  if (type === "password") {
    return (
      <div className="w-full md:w-[30vw] flex flex-col gap-2">
        <label className="text-md text-heading">{label}</label>
        <div className="relative w-full">
          <input
            className="border-2 border-subheading rounded-md py-2 px-3 w-full pr-10"
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-600"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full md:w-[30vw] flex flex-col gap-2">
        <label className="text-md text-heading">{label}</label>
        <input
          className="border-2 border-subheading rounded-md py-2 px-3"
          type={type}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }
};

export default InputForm;
