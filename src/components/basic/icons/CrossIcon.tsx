import React from "react";

function CrossIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 26 26">
      <g fill="none" fillRule="evenodd" stroke="none" strokeLinecap="square" strokeWidth="1">
        <g stroke="#979797" transform="translate(1 1)">
          <path d="M0.5 0.5L23.5 23.5"></path>
          <path d="M0.5 0.5L23.5 23.5" transform="matrix(1 0 0 -1 0 24)"></path>
        </g>
      </g>
    </svg>
  );
}

export default CrossIcon;
