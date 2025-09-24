import React, { useState } from "react";

interface TextAreaProps {
  label: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  onChange,
}) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setText(value);
    onChange(value); // return the text to parent
  };

  return (
    <div className="w-full md:w-[50vw] flex flex-col gap-2">
      <label className="text-md text-heading">{label}</label>
      <textarea
        value={text}
        placeholder={placeholder}
        onChange={handleChange}
        className="p-2 border-2 border-subheading rounded-md focus:outline-none focus:ring-2 focus:ring-heading h-[20vh]"
      />
    </div>
  );
};

export default TextArea;
