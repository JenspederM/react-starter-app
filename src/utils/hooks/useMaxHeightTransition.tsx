import { useEffect, useState, useCallback } from "react";

export const useMaxHeightTransition = (
  small: string,
  large: string,
  initialState?: boolean,
  time?: number
) => {
  const [maxHeight, setmaxHeight] = useState(initialState ? large : small);

  const [open, setisOpen] = useState(!!initialState);
  useEffect(() => {
    open && setmaxHeight(large);
  }, [open, large]);
  const setOpen = useCallback(
    (newState: boolean) => {
      if (newState) {
        setisOpen(true);
      } else {
        setmaxHeight(small);
        setTimeout(() => setisOpen(false), time ? time : 100);
      }
    },
    [small, time]
  );
  const style = {
    maxHeight: `${maxHeight}`,
    transition: `max-height ${time ? time / 1000 : 0.1}s ease-in`,
  };
  return { open, setOpen, style };
};
