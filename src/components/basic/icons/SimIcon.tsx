import React from "react";

interface Props {
  className?: string;
}

const SimIcon = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.className || ""}
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <g fill="currentColor">
        <circle cx="7" cy="14" r="3" />
        <circle cx="11" cy="6" r="3" />
        <circle cx="16.6" cy="17.6" r="3" />
      </g>
    </svg>
  );
};

export default SimIcon;