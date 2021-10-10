import React from "react";

const LocalUpdatedIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className ? className : ""}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="13"
      fill="none"
      viewBox="0 0 14 13"
    >
      <path
        fill="currentColor"
        d="M7.057 3.572l-4.89 4.312c-.039.028-.08.053-.122.075V12.1a.358.358 0 00.358.358h9.31a.358.358 0 00.358-.358V7.96a1.043 1.043 0 01-.118-.072L7.057 3.572zm6.325 2.714l-1.313-1.16V2.074a.358.358 0 00-.356-.358h-1.435a.358.358 0 00-.358.358V3.23l-2.265-2a.892.892 0 00-1.2 0L.732 6.286a.358.358 0 00-.027.506l.479.533a.358.358 0 00.506.027l5.13-4.526a.358.358 0 01.474 0l5.131 4.525a.357.357 0 00.506-.027l.479-.533a.358.358 0 00-.029-.505h.001z"
      ></path>
    </svg>
  );
};

export default LocalUpdatedIcon;
