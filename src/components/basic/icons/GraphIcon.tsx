import React from "react";

interface Props {
  className?: string;
}

export const DynamicGraphIcon = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      className={props.className || ""}
      fill="currentColor"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(3 3)">
          <path d="M0 0H24V24H0z"></path>
          <path
            fill="currentColor"
            fillRule="nonzero"
            d="M23 8c0 1.1-.9 2-2 2a1.7 1.7 0 01-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56A1.7 1.7 0 0119 8c0-1.1.9-2 2-2s2 .9 2 2zM3 15a1 1 0 100 2 1 1 0 000-2zm7-7a1 1 0 100 2 1 1 0 000-2zm5 5a1 1 0 100 2 1 1 0 000-2zm6-6a1 1 0 100 2 1 1 0 000-2z"
          ></path>
        </g>
        <path fill="currentColor" strokeLinecap="square" d="M2.5 3.5v24"></path>
        <path fill="currentColor" strokeLinecap="square" d="M26.5 27.5h-24"></path>
      </g>
    </svg>
  );
};

export const FlatGraphIcon = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      className={props.className || ""}
      fill="currentColor"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="rotate(45 5.073 19.075)">
          <path d="M0 0H21.176V21.176H0z"></path>
          <path
            fill="currentColor"
            fillRule="nonzero"
            d="M15.882 2.647a1.77 1.77 0 01-1.764 1.765 1.5 1.5 0 01-.45-.062l-3.142 3.132a1.77 1.77 0 01-1.703 2.224A1.77 1.77 0 017.06 7.94c0-.159.017-.317.062-.459l2.161 2.162c-.14.044-.3.062-.458.062-.16 0-.318-.018-.46-.062L4.35 13.668a1.5 1.5 0 01.062.45 1.77 1.77 0 01-1.765 1.764 1.77 1.77 0 01-1.765-1.764c0-.97.794-1.765 1.765-1.765a1.5 1.5 0 01.45.062L7.121 8.4a1.559 1.559 0 01-.062-.459c0-.97.794-1.765 1.765-1.765.97 0 1.764.795 1.764 1.765 0 .159-.017.318-.062.459L8.365 6.238c.14-.044.3-.062.459-.062.158 0 .317.018.458.062l3.133-3.14a1.5 1.5 0 01-.062-.45c0-.972.794-1.766 1.765-1.766.97 0 1.764.794 1.764 1.765zM2.647 13.235a.882.882 0 100 1.765.882.882 0 000-1.765zM8.824 7.06a.882.882 0 100 1.765.882.882 0 000-1.765zm5.294-5.294a.882.882 0 100 1.764.882.882 0 000-1.764z"
          ></path>
        </g>
        <path fill="currentColor" strokeLinecap="square" d="M3.97 4.206v21.176"></path>
        <path fill="currentColor" strokeLinecap="square" d="M25.147 25.382H3.971"></path>
      </g>
    </svg>
  );
};
