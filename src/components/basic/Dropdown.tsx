import React, { useRef, useEffect, useCallback } from "react";
import { useClickOutsideEffect } from "utils/hooks/useClickOutside";
import { useMaxHeightTransition } from "utils/hooks/useMaxHeightTransition";
import { usePagePosition } from "utils/hooks/usePagePosition";
import { createPortal } from "react-dom";
import LoadingOverlay from "./LoadingOverlay";
import InfoIcon from "./icons/InfoIcon";
// import { createPortal } from "react-dom";

// const appRoot = document.getElementById("root");s

type Option = { id: string; display: string; val?: any; value?: any };

interface Props {
  className?: string;
  options: Option[];
  selectedID?: string;
  placeholder?: string;
  emptyMsg?: string;
  onSelect: (selected: Option) => void;
  onAddNew?: () => void;
  flipped?: true;
  loading?: boolean;
  displayInfoModal?: (option: Option) => void;
  headlessStyle?: true;
  drawerClasses?: string;
}

const Dropdown: React.FC<Props> = ({
  className,
  options,
  selectedID,
  placeholder,
  onSelect,
  onAddNew,
  emptyMsg,
  flipped,
  loading,
  displayInfoModal,
  headlessStyle,
  drawerClasses,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { open, setOpen, style } = useMaxHeightTransition("0", "240px");

  const closeDropdown = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  useClickOutsideEffect(ref, closeDropdown);

  const selected = options.find((o) => o.id === selectedID);
  const display = selected ? selected.display : placeholder ? placeholder : "";

  return (
    <div
      ref={ref}
      className={`relative flex items-center cursor-pointer border-gray-300 pl-3 pr-2 py-1 
      ${!headlessStyle ? "shadow border rounded" : ""}
      ${className || ""}`}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <span className="truncate">{display}</span>
      {displayInfoModal && selected && (
        <div
          className="ml-1 cursor-pointer text-gray-700 hover:text-green-numerous"
          onClick={(e) => {
            displayInfoModal(selected);
            e.stopPropagation();
          }}
        >
          <InfoIcon className="h-4 w-4" />
        </div>
      )}
      <div className="flex-grow"></div>
      <svg
        className="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        style={{
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s ease",
        }}
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
      {loading && <LoadingOverlay />}
      {open && (
        <div
          className={`rounded border border-gray-200 shadow-lg overflow-y-auto absolute w-full left-0 z-10 bg-white
            ${flipped ? "bottom-0 mb-8" : "top-0 mt-8"}
            ${drawerClasses || ""}`}
          style={{
            ...style,
          }}
        >
          {options.length > 0 ? (
            options.map((option) => (
              <div
                className={`py-2 px-4 cursor-pointer hover:bg-gray-100 flex items-center`}
                key={option.id}
                onClick={(e) => {
                  onSelect(option);
                  setOpen(false);
                }}
              >
                <span className="truncate">{option.display}</span>
                {displayInfoModal && (
                  <div
                    className="ml-1 cursor-pointer text-gray-700 hover:text-green-numerous"
                    onClick={(e) => {
                      displayInfoModal(option);
                      e.stopPropagation();
                    }}
                  >
                    <InfoIcon className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className={`py-2 px-4`}>{emptyMsg ? emptyMsg : "no options..."}</div>
          )}
          {onAddNew && (
            <button
              onClick={() => {
                onAddNew();
                setOpen(false);
              }}
              className={`py-2 w-full hover:bg-gray-100 focus:outline-none border-t border-gray-200`}
            >
              Add new
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

export const BooleanDropdownSelecter = ({
  value,
  onChange,
  className,
}: {
  value: boolean;
  onChange: (newVal: boolean) => void;
  className?: string;
}) => {
  return (
    <Dropdown
      className={`bg-white ${className ? className : ""}`}
      options={[
        { id: "true", display: "True", val: true },
        { id: "false", display: "False", val: false },
      ]}
      selectedID={value?.toString()}
      onSelect={(selected) => {
        onChange(selected.val);
      }}
    />
  );
};

export const DropdownAtRoot: React.FC<Props> = ({
  className,
  options,
  selectedID,
  placeholder,
  onSelect,
  onAddNew,
  emptyMsg,
  headlessStyle,
}) => {
  const { open, setOpen, style } = useMaxHeightTransition("0", "240px");

  //clickhandler for closing
  const ref = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const { pagePosition, updatePosition, width } = usePagePosition(ref);
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
      setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("scroll", updatePosition);
    return () => {
      setOpen(false);
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("scroll", updatePosition);
    };
  }, [updatePosition, setOpen]);

  const selected = options.find((o) => o.id === selectedID);
  const display = selected ? selected.display : placeholder ? placeholder : "";

  return (
    <>
      <div
        ref={ref}
        className={`flex items-center pl-3 pr-2 py-1 cursor-pointer border-gray-300 ${
          !headlessStyle ? "shadow border rounded" : ""
        } ${className ? className : ""}`}
        onClick={() => {
          setOpen(!open);
          if (!open) updatePosition();
        }}
      >
        <span className="flex-grow truncate">{display}</span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>

      {open && (
        <RootPortal>
          <div
            ref={popupRef}
            className={`text-xs rounded border border-gray-200 shadow-lg absolute w-full top-0 left-0 overflow-auto z-10 bg-white
            `}
            style={{
              ...style,
              marginTop: pagePosition.marginTop + 30,
              marginLeft: pagePosition.marginLeft,
              zIndex: 1000,
              width,
            }}
          >
            {options.length > 0 ? (
              options.map((option) => (
                <div
                  className={`py-2 px-4 cursor-pointer hover:bg-gray-100`}
                  key={option.id}
                  onClick={(e) => {
                    onSelect(option);
                    setOpen(false);
                  }}
                >
                  {option.display}
                </div>
              ))
            ) : (
              <div className={`py-2 px-4`}>{emptyMsg ? emptyMsg : "no options..."}</div>
            )}
            {onAddNew && (
              <button
                onClick={() => {
                  onAddNew();
                  setOpen(false);
                }}
                className={`py-2 w-full text-xs hover:bg-gray-100 focus:outline-none border-t border-gray-200`}
              >
                Add new
              </button>
            )}
          </div>
        </RootPortal>
      )}
    </>
  );
};

const RootPortal: React.FC = ({ children }) => {
  const appRoot = document.getElementById("root");
  return appRoot && createPortal(children, appRoot);
};
