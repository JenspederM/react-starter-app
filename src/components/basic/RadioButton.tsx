import React from "react";

const RadioButton: React.FC<{ active: boolean; onClick?: () => void }> = ({
  active,
  onClick,
}) => {
  return (
    <div
      onClick={() => {
        if (onClick) onClick();
      }}
      className={`h-4 w-4 cursor-pointer  rounded-full border  flex items-center justify-center ${
        active ? "border-blue-500 bg-blue-500" : "border-gray-400"
      }`}
    >
      {active && <div className="h-2 w-2 rounded-full bg-white shadow"></div>}
    </div>
  );
};

export default RadioButton;
