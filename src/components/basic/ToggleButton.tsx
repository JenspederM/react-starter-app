import React from "react";

interface Props {
  active: boolean;
  onChange: () => void;
}

const ToggleButton = ({ active, onChange }: Props) => {
  return (
    <div
      className={`w-8 h-4  rounded-full relative cursor-pointer ${
        active ? "bg-blue-400 border-blue-500" : "bg-gray-300 border-gray-400"
      }`}
      onClick={() => onChange()}
    >
      <div
        className={`absolute border top-0 right-0 h-4 w-4 rounded-full shadow ${
          active ? "bg-white" : "bg-white"
        }`}
        style={{ marginRight: active ? "0rem" : "1rem", transition: "margin 0.4s ease" }}
      ></div>
    </div>
  );
};

export default ToggleButton;
