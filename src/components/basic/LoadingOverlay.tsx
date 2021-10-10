import React from "react";
import LoadingIcon from "./LoadingIcon/LoadingIcon";

interface Props {
  className?: string;
}

const LoadingOverlay = ({ className }: Props) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full bg-white opacity-50 flex items-center justify-center ${
        className || ""
      }`}
    >
      <LoadingIcon className="w-1/2" />
    </div>
  );
};

export default LoadingOverlay;
