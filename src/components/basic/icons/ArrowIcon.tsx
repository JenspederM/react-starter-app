import React from "react";

interface Props {
  direction: "left" | "right" | "up" | "down";
  onClick?: () => void;
  className?: string;
}

const ArrowIcon = ({ direction, onClick, className }: Props) => {
  const rotation =
    direction === "down"
      ? "0"
      : direction === "left"
      ? "90"
      : direction === "up"
      ? "180"
      : "270";
  return (
    <svg
      className={className || ""}
      onClick={onClick}
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.2s ease",
      }}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
      <path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z" />
    </svg>
  );
};

export default ArrowIcon;
