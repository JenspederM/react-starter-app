import React, { useRef } from "react";
import RootPortal from "./RootPortal";

interface Props {
  onClose?: () => void;
  className?: string;
  zIndex?: number;
  canOverflow?: true;
}

const Modal: React.FC<Props> = ({ onClose, children, className, zIndex, canOverflow }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <RootPortal>
      <div
        className={`fixed top-0 left-0 w-full h-screen overflow-y-auto flex  flex-col ${
          canOverflow ? "" : "justify-center"
        } items-center ${className || "px-16 py-8"}`}
        style={{ zIndex: zIndex || 20 }}
      >
        <div
          onClick={onClose}
          ref={ref}
          className={`fixed top-0 bg-gray-800 left-0 w-full h-screen opacity-75 z-30`}
        />
        {children}
      </div>
    </RootPortal>
  );
};

export default Modal;
