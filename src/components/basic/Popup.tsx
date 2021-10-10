import React, { useState, useRef, useEffect } from "react";
import { usePagePosition } from "utils/hooks/usePagePosition";
import { createPortal } from "react-dom";

interface Props {
  className?: string;
  mt?: number;
  pos?: "center" | "left" | "right";
  content: (closePopup: () => void) => React.ReactNode;
  useHover?: boolean;
  allowOverflow?: true;
  width?: string;
  allowRootClicks?: boolean;
}

export const Popup: React.FC<Props> = ({
  children,
  mt,
  pos,
  className,
  content,
  useHover,
  allowOverflow,
  width,
  allowRootClicks,
}) => {
  const [hovered, sethovered] = useState(false);
  const [clicked, setclicked] = useState(false);

  //clickhandler for closing
  const ref = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const { pagePosition, updatePosition } = usePagePosition(ref);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && e.target instanceof Node && ref.current.contains(e.target)) {
        return;
      }
      if (
        popupRef.current &&
        e.target instanceof Node &&
        popupRef.current.contains(e.target)
      ) {
        return;
      }
      if (allowRootClicks) {
        const appRoot = document.getElementById("portal_target");
        if (appRoot && e.target instanceof Node && appRoot.contains(e.target)) return;
      }
      setclicked(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      setclicked(false);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [allowRootClicks]);

  useEffect(() => {
    document.addEventListener("scroll", updatePosition);
    return () => {
      document.removeEventListener("scroll", updatePosition);
    };
  }, [updatePosition]);

  const closeMe = () => {
    sethovered(false);
    setclicked(false);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        if (useHover) {
          updatePosition();
          sethovered(true);
        }
      }}
      onMouseLeave={() => sethovered(false)}
    >
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          updatePosition();
          setclicked(true);
        }}
      >
        {children}
      </div>
      {(hovered || clicked) && (
        <RootPortal>
          <div
            ref={popupRef}
            className={`absolute top-0 
              ${pos === "right" ? "right-0" : "left-0"} 
            `}
            style={{
              marginTop: mt ? pagePosition.marginTop + mt : pagePosition.marginTop,
              marginLeft: pos !== "right" ? pagePosition.marginLeft : 0,
              marginRight: pos === "right" ? pagePosition.marginRight : 0,
              zIndex: 1000,
            }}
          >
            <div
              style={{ width: width || "14rem" }}
              className={`z-50 bg-white shadow-xl rounded border text-left ${
                className ? className : ""
              } ${allowOverflow ? "" : "overflow-hidden"}`}
            >
              {content(closeMe)}
            </div>
          </div>
        </RootPortal>
      )}
    </div>
  );
};

const RootPortal: React.FC = ({ children }) => {
  const appRoot = document.getElementById("portal_target");
  return appRoot && createPortal(children, appRoot);
};

export const ConfirmPopup: React.FC<{ onConfirm: () => void; btnText: string }> = ({
  onConfirm,
  btnText,
}) => {
  return (
    <Popup
      content={(closeDeletePopup) => {
        return (
          <div className="text-xs px-2 py-2 border border-gray-200 rounded">
            <div className="font-medium">Remove input source?</div>
            <div className="italic mb-2">
              Input variables using this source will stop working
            </div>
            <div className="flex">
              <div className="w-1/2 pr-1">
                <button
                  className={`button-small border-red-400 bg-red-400 text-white w-full`}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("onRemove");
                    onConfirm();
                    closeDeletePopup();
                  }}
                >
                  Remove
                </button>
              </div>
              <div className="w-1/2 pl-1">
                <button
                  className={`button-small w-full`}
                  onClick={(e) => {
                    e.preventDefault();
                    closeDeletePopup();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        );
      }}
    >
      <button className={`button-popup text-red-500`}>{btnText}</button>
    </Popup>
  );
};
