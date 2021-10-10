import React from "react";

interface Props {
  optionOne: string;
  onClickOne: () => void;
  optionTwo: string;
  onClickTwo: () => void;
  active: "one" | "two";
}

const DualButton: React.FC<Props> = ({
  active,
  onClickOne,
  onClickTwo,
  optionOne,
  optionTwo,
}) => {
  return (
    <div className="flex">
      <button
        className={` text-xs focus:outline-none w-32 py-1 px-2 border-l border-t border-b rounded-l overflow-hidden ${
          active === "one"
            ? "border-green-numerous text-green-numerous border-r"
            : "border-gray-200"
        }`}
        onClick={() => {
          onClickOne();
        }}
      >
        {optionOne}
      </button>
      <button
        className={`text-xs focus:outline-none w-32 py-1 px-2 border-r border-t border-b rounded-r ${
          active === "two"
            ? "border-green-numerous text-green-numerous border-l"
            : "border-gray-200"
        }`}
        onClick={() => {
          onClickTwo();
        }}
      >
        {optionTwo}
      </button>
    </div>
  );
};

export default DualButton;
