import React from "react";

interface Props {
  className?: string;
}

const MinusIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
    </svg>
  );
};

export default MinusIcon;
