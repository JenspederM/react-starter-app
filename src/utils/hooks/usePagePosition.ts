import { useEffect, useState, useCallback } from "react";

//returns an absolute position of a ref element on page

export const usePagePosition = (ref: React.RefObject<HTMLDivElement>) => {
  const [pagePosition, setPagePosition] = useState({
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
  });

  const [width, setWidth] = useState(0);
  useEffect(() => {
    const w = ref.current?.offsetWidth;
    setWidth(w || 0);
  }, [ref]);

  useEffect(() => {
    //get the absolute page position for the floating ref:
    if (ref.current) {
      const boundingRect = ref.current.getBoundingClientRect();
      const screenScrollPosX = window.pageXOffset || document.documentElement.scrollLeft;
      const screenScrollPosY = window.pageYOffset || document.documentElement.scrollTop;
      const screenMarginRight = window.innerWidth - screenScrollPosX - boundingRect.right;
      setPagePosition({
        marginLeft: boundingRect.left + screenScrollPosX,
        marginTop: boundingRect.top + screenScrollPosY,
        marginRight: screenMarginRight,
      });
    }
  }, [ref]);

  const updatePosition = useCallback(() => {
    if (ref.current) {
      const boundingRect = ref.current.getBoundingClientRect();
      const screenScrollPosX = window.pageXOffset || document.documentElement.scrollLeft;
      const screenScrollPosY = window.pageYOffset || document.documentElement.scrollTop;
      const screenMarginRight = window.innerWidth - screenScrollPosX - boundingRect.right;
      setPagePosition({
        marginLeft: boundingRect.left + screenScrollPosX,
        marginTop: boundingRect.top + screenScrollPosY,
        marginRight: screenMarginRight,
      });
    }
  }, [ref]);

  return { pagePosition, updatePosition, width };
};
