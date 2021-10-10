import React, { useState, useEffect } from "react";

interface Props {
  value?: string;
  onChange: (val: string | undefined) => void;
  delayInMs?: number;
  className?: string;
  placeholder?: string;
}

const InputTextDebounced: React.FC<Props> = ({
  value,
  onChange,
  delayInMs,
  className,
  placeholder,
}) => {
  const [cachedVal, setcachedVal] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(cachedVal);
      console.log({ cachedVal });
    }, delayInMs || 0);
    return () => {
      clearTimeout(handler);
    };
  }, [cachedVal]);

  return (
    <input
      type="text"
      value={cachedVal}
      onChange={e => {
        setcachedVal(e.target.value);
      }}
      className={className}
      placeholder={placeholder || ""}
    />
  );
};

export default InputTextDebounced;
