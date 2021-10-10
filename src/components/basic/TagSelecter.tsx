import React, { useState, useMemo, useRef, useCallback } from "react";
import CloseIcon from "./icons/CloseIcon";
import { useMaxHeightTransition } from "utils/hooks/useMaxHeightTransition";
import { useClickOutsideEffect } from "utils/hooks/useClickOutside";

// const appRoot = document.getElementById("root");

const MultipleTagSelecter: React.FC<{
  tags: { id: string; displayName: string }[];
  selectedTagIDs: string[];
  selectTag: (tagID: string) => void;
  removeTag: (tagID: string) => void;
  hideSelectedTags?: true;
}> = ({ tags, selectedTagIDs, selectTag, removeTag, hideSelectedTags }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { open, setOpen, style } = useMaxHeightTransition("0", "400px");

  const closeDropdown = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  useClickOutsideEffect(ref, closeDropdown);

  const renderTag = (tag: { id: string; displayName: string }) => {
    return (
      <div
        key={tag.id}
        className={`px-1 mx-1 my-1 text-xs cursor-pointer rounded-lg border-2 border-green-600 shadow text-white bg-green-600 flex items-center`}
        onClick={() => {
          removeTag(tag.id);
          inputRef.current?.focus();
        }}
      >
        <div className="pr-1 pl-1">{tag.displayName}</div>
        <div className="h-4 w-4">
          <CloseIcon />
        </div>
      </div>
    );
  };

  const selectedTags = useMemo(() => {
    return tags.filter((tag) => selectedTagIDs.some((id) => id === tag.id));
  }, [tags, selectedTagIDs]);

  const matchedTags = useMemo(() => {
    setOpen(searchTerm.length > 0);
    return tags
      .filter((tag) => !selectedTagIDs.some((id) => id === tag.id)) //dont include selected tags
      .filter((tag) => tag.displayName.search(new RegExp(searchTerm, "i")) !== -1); //find the search word in displaynames
  }, [searchTerm, tags, selectedTagIDs, setOpen]);

  return (
    <div className="relative w-full text-xs" ref={ref}>
      <div className="flex flex-wrap px-1 border rounded">
        {!hideSelectedTags && selectedTags.map(renderTag)}
        <input
          ref={inputRef}
          className={`focus:outline-none flex-grow p-1`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && searchTerm.length < 1 && selectedTags.length > 0) {
              console.log("removeTag");
              removeTag(selectedTags[selectedTags.length - 1].id);
            }
          }}
        />
      </div>
      {open && (
        <div
          style={style}
          className="absolute top-0 right-0 w-full mt-10 z-20 border border-gray-200 bg-white shadow-md rounded-lg text-xs overflow-auto"
        >
          {matchedTags.map((mt) => (
            <div
              key={mt.id}
              className="w-full px-4 border-b border-gray-100 hover:bg-gray-100 py-1 cursor-pointer"
              onClick={() => {
                selectTag(mt.id);
                inputRef.current?.focus();
              }}
            >
              {mt.displayName}
            </div>
          ))}
          {(!matchedTags || matchedTags.length === 0) && (
            <div className="w-full text-center py-2">No tags found...</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MultipleTagSelecter;

// const RootPortal: React.FC = ({ children }) => {
//   return appRoot && createPortal(children, appRoot);
// };

// const appRoot = document.getElementById("root");
