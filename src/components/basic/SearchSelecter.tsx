import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useClickOutsideEffect } from "utils/hooks/useClickOutside";
import { useMaxHeightTransition } from "utils/hooks/useMaxHeightTransition";
import { usePagePosition } from "utils/hooks/usePagePosition";
import LoadingOverlay from "./LoadingOverlay";
import RootPortal from "./RootPortal";

type Option = { id: string; display: string; val?: any };

interface Props {
  className?: string;
  options: Option[];
  selectedID?: string;
  placeholder?: string;
  emptyMsg?: string;
  onSelect: (selected: Option) => void;
  flipped?: true;
  loading?: boolean;
  headlessStyle?: true;
  drawerClasses?: string;
  drawerID?: string;
}

const SearchSelecter: React.FC<Props> = ({
  className,
  options,
  selectedID,
  placeholder,
  onSelect,
  emptyMsg,
  flipped,
  loading,
  headlessStyle,
  drawerClasses,
  drawerID,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { pagePosition, updatePosition, width } = usePagePosition(ref);
  useEffect(() => {
    document.addEventListener("scroll", updatePosition);
    return () => {
      document.removeEventListener("scroll", updatePosition);
    };
  }, [updatePosition]);
  const [focused, setFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [matchedTags, setMatchedTags] = useState<Option[]>([]);
  const [viewTags, setViewTags] = useState<Option[]>([]);
  const [debouncingSearch, setDebouncingSearch] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);

  //clickhandler for closing
  const popupRef = useRef<HTMLDivElement>(null);

  const selected = useMemo(() => options.find((o) => o.id === selectedID), [
    options,
    selectedID,
  ]);
  useEffect(() => {
    if (selected) setSearchTerm(selected.display);
  }, [selected]);

  const { open, setOpen, style } = useMaxHeightTransition("0", "240px");
  const closeSelecter = useCallback(() => {
    setOpen(false);
    setFocused(false);
    if (searchTerm.length === 0 && selected) setSearchTerm(selected.display);
  }, [setOpen, searchTerm, selected]);
  useClickOutsideEffect([popupRef, ref], closeSelecter);

  //search effect:
  useEffect(() => {
    setDebouncingSearch(true);
    const searchTags = () => {
      if (searchTerm.length === 0) setMatchedTags([]);
      else {
        setLoadingSearch(true);
        const matched = options.filter(
          (tag) => tag.display.search(new RegExp(searchTerm, "i")) !== -1
        ); //find the search word in displaynames
        setMatchedTags(matched); //Save all tags found
        setViewTags(matched.slice(0, 100)); //only show up to 100 to avoid clogging the UI.
        setLoadingSearch(false);
      }
      setDebouncingSearch(false);
    };
    const timeout = setTimeout(searchTags, 1500); //timeout debounce for search...
    return () => {
      clearTimeout(timeout);
    };
  }, [searchTerm, options]);

  const display = useMemo(
    () => (selected ? selected.display : placeholder ? placeholder : ""),
    [selected, placeholder]
  );

  const renderOpenDrawer = () => {
    return (
      <RootPortal>
        <div
          ref={popupRef}
          id={drawerID}
          className={`rounded border border-gray-200 shadow-lg overflow-y-scroll absolute w-full top-0 left-0 z-10 bg-white
                ${flipped ? "bottom-0" : "top-0"}
                ${drawerClasses || "text-xs"}`}
          style={{
            ...style,
            marginTop: pagePosition.marginTop + 35,
            marginLeft: pagePosition.marginLeft,
            zIndex: 1000,
            width,
          }}
        >
          {viewTags.length > 0 ? (
            viewTags.map((option) => (
              <div
                className={`py-2 px-4 cursor-pointer hover:bg-gray-100 flex items-center`}
                key={option.id}
                onClick={(e) => {
                  onSelect(option);
                  setFocused(false);
                  setOpen(false);
                }}
              >
                <span className="truncate">{option.display}</span>
              </div>
            ))
          ) : (
            <div className={`py-2 px-4`}>{emptyMsg ? emptyMsg : "no options..."}</div>
          )}
          {viewTags.length < matchedTags.length && (
            <div
              className={`py-2 px-4 cursor-pointer hover:bg-gray-100 flex items-center`}
              onClick={(e) => {
                setViewTags(matchedTags.slice(0, viewTags.length + 100));
              }}
            >
              <span className="truncate text-center w-full">Load more..</span>
            </div>
          )}
          {(debouncingSearch || loadingSearch) && <LoadingOverlay />}
        </div>
      </RootPortal>
    );
  };

  return (
    <div
      ref={ref}
      className={`relative border-gray-300 px-2 py-1 
          ${!headlessStyle ? "shadow border rounded" : ""}
          ${className || ""}`}
    >
      <div className="w-full truncate">{display}</div>
      <input
        className={`absolute top-0 left-0  px-2 py-1 w-full focus:outline-none z-10
            ${searchTerm.length > 0 ? "opacity-100" : focused ? "opacity-50" : "opacity-0"}`}
        value={searchTerm}
        onFocus={() => setFocused(true)}
        onDoubleClick={() => {
          setSearchTerm("");
        }}
        onBlur={() => {
          setFocused(false);
        }}
        onChange={(e) => {
          if (!loadingSearch) {
            setSearchTerm(e.target.value);
            setOpen(e.target.value.length > 0);
          }
        }}
      />
      {/* {allowDropdown && (
        <svg
          className="fill-current flex-none h-4 w-4 cursor-pointer"
          onClick={() => {
            setOpen(!open);
            setFocused(!open);
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      )} */}
      {(loadingSearch || loading) && <LoadingOverlay />}

      {open && renderOpenDrawer()}
    </div>
  );
};

export default SearchSelecter;
