import React from "react";

interface Props {
  className?: string;
}

const SystemIcon = (props: Props) => {
  return (
    <svg
      className={props.className || ""}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        fill="currentColor"
        d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H2c-.55 0-1 .45-1 1v5h6V7c0-.55-.45-1-1-1H5V2zm4 14c0 1.3.84 2.4 2 2.82V22c0 .55.45 1 1 1s1-.45 1-1v-3.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V22c0 .55.45 1 1 1s1-.45 1-1v-3.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-1c-.55 0-1 .45-1 1v5h6V7c0-.55-.45-1-1-1h-1zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4h-1c-.55 0-1 .45-1 1v5h6V7c0-.55-.45-1-1-1h-1V2zm4 14c0 1.3.84 2.4 2 2.82V22c0 .55.45 1 1 1s1-.45 1-1v-3.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"
      />
    </svg>
  );
};

export default SystemIcon;
