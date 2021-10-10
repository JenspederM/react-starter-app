import React from "react";

interface Props {}

const OtherPage: React.FC<Props> = () => {
  return (
    <div className="w-full h-screen bg-gray-100">
      <div className="w-full h-full flex items-center justify-center">
        Other page content goes here.....
      </div>
    </div>
  );
};

export default OtherPage;
