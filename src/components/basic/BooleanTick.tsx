import React from "react";

interface Props {
  selected: boolean;
  onCheck: (newVal: boolean) => void;
}

const BooleanTick = ({ selected, onCheck: onClick }: Props) => {
  return (
    <div className="w-full py-1 px-2 bg-white flex items-center border cursor-pointer rounded hover:shadow">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => {
          onClick(e.target.checked);
        }}
      />
      <span className="ml-2 flex-grow" onClick={() => onClick(!selected)}>
        {selected ? "True" : "False"}
      </span>
    </div>
  );
};

export default BooleanTick;
