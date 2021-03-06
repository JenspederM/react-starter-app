import React from "react";

interface Props {
  className?: string;
}

const CloudDataIcon = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      className={props.className || ""}
      fill="currentColor"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(6 9)">
          <g>
            <path d="M0 0H17V17H0z"></path>
            <path
              fill="#11161A"
              fillRule="nonzero"
              d="M16.292 5.667a1.42 1.42 0 01-1.417 1.416c-.127 0-.248-.014-.361-.05l-2.522 2.515a1.42 1.42 0 01-1.367 1.785 1.42 1.42 0 01-1.367-1.785L7.452 7.742c-.114.035-.241.05-.369.05-.127 0-.255-.014-.368-.05l-3.223 3.23c.035.113.05.234.05.361a1.42 1.42 0 01-1.417 1.417 1.42 1.42 0 01-1.417-1.417c0-.779.638-1.416 1.417-1.416.127 0 .248.014.361.05l3.23-3.224a1.42 1.42 0 011.367-1.785A1.42 1.42 0 018.45 6.743l1.807 1.807c.113-.036.24-.05.368-.05.127 0 .255.014.368.05l2.515-2.522a1.204 1.204 0 01-.05-.361c0-.78.638-1.417 1.417-1.417.78 0 1.417.638 1.417 1.417zM2.125 10.625a.708.708 0 100 1.417.708.708 0 000-1.417zm4.958-4.958a.708.708 0 100 1.416.708.708 0 000-1.416zm3.542 3.541a.708.708 0 100 1.417.708.708 0 000-1.417zm4.25-4.25a.708.708 0 100 1.417.708.708 0 000-1.417z"
            ></path>
          </g>
        </g>
        <path
          stroke="#000"
          strokeWidth="1.5"
          d="M7.766 13.081C9.54 8.361 12.406 6 16.366 6c4.371 0 7.11 2.36 8.215 7.081 4.28.406 6.419 2.604 6.419 6.595 0 4.057-1.93 6.166-5.79 6.324l-17.444-.238C3.256 26.101 1 24.072 1 19.676c0-4.397 2.255-6.595 6.766-6.595z"
        ></path>
      </g>
    </svg>
  );
};

export default CloudDataIcon;
