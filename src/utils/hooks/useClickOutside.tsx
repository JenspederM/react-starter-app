import { useEffect } from "react";

export const useClickOutsideEffect = (
  ref: React.RefObject<HTMLDivElement> | React.RefObject<HTMLDivElement>[],
  onClickOutside: () => void,
  allowedClickID?: string | string[]
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      let clickedInside = false;
      if (Array.isArray(ref)) {
        ref.forEach((r) => {
          if (r.current && e.target instanceof Node && r.current.contains(e.target)) {
            clickedInside = true;
          }
        });
      } else {
        if (ref.current && e.target instanceof Node && ref.current.contains(e.target)) {
          clickedInside = true;
        }
      }
      if (allowedClickID) {
        const allowedIDs =
          typeof allowedClickID === "string" ? [allowedClickID] : allowedClickID;
        allowedIDs.forEach((allowedID) => {
          const customRef = document.getElementById(allowedID);
          if (customRef && e.target instanceof Node && customRef.contains(e.target)) {
            clickedInside = true;
          }
        });
      }

      if (!clickedInside) onClickOutside();
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, onClickOutside, allowedClickID]);
};
