import React from "react";

const GlobalUpdatedIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className ? className : ""}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M11.5 5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm-.75 13.448A5.992 5.992 0 015.5 12.5a6.09 6.09 0 01.157-1.342L9.25 14.75v.75a1.5 1.5 0 001.5 1.5v1.448zm5.182-1.909A1.487 1.487 0 0014.5 15.5h-.75v-2.25a.753.753 0 00-.75-.75H8.5V11H10a.753.753 0 00.75-.75v-1.5h1.5a1.5 1.5 0 001.5-1.5v-.307a5.986 5.986 0 012.182 9.6v-.004z"
      ></path>
      <g filter="url(#filter0_d)">
        <circle cx="17" cy="6" r="4" fill="#00FF19"></circle>
        <circle cx="17" cy="6" r="3.5" stroke="#C4C9CF"></circle>
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="12"
          height="12"
          x="11"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.0999999 0 0 0 0.63 0"></feColorMatrix>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
        </filter>
      </defs>
    </svg>
  );
};

export default GlobalUpdatedIcon;
