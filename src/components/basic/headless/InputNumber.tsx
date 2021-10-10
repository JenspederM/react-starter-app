import React, { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  onChange: (newVal: number) => void;
  className?: string;
}

const InputNumber: React.FC<Props> = ({ value, onChange, className }) => {
  const [displayVal, setDisplayVal] = useState(value.toString());
  const latestValRef = useRef(value);
  //if external changes to number from outside:
  useEffect(() => {
    if (value !== latestValRef.current) {
      latestValRef.current = value;
      setDisplayVal(value.toString());
    }
  }, [value]);
  return (
    <input
      className={className || ""}
      type="number"
      value={displayVal}
      pattern="^-?[0-9]\d*\.?\d*$"
      onChange={(e) => {
        setDisplayVal(e.target.value);
        const newVal = parseFloat(e.target.value);
        if (!isNaN(newVal)) {
          latestValRef.current = newVal;
          onChange(newVal);
        }
      }}
    />
  );
};

export default InputNumber;
