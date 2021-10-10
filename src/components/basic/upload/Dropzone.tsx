import React, { useState, useRef } from "react";

interface Props {
  className: string;
  allowedTypes: "all" | string;
  onFilesAdded: (File: File[]) => void;
  children: (
    dropHovered: boolean,
    error: string | null,
    clickToAdd: () => void
  ) => React.ReactNode;
  multiFile?: boolean;
  onError?: (errorMsg: string) => void;
}

const Dropzone: React.FC<Props> = ({
  className,
  onFilesAdded,
  children,
  allowedTypes,
  multiFile,
  onError,
}) => {
  const [dropHovered, setdropHovered] = useState(false);
  const [error, seterror] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    setdropHovered(false);
    event.preventDefault();
    const files = event.dataTransfer.files;
    onFilesInput(files);
  };
  const manualOpen = () => {
    fileInputRef.current && fileInputRef.current.click();
  };
  const onFilesInput = (files: FileList) => {
    seterror(null);
    const fileArray: File[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      const extension = file?.name.substring(file.name.lastIndexOf(".") + 1);
      if (file && extension && (allowedTypes === "all" || allowedTypes === extension))
        fileArray.push(file);
    }

    if (fileArray.length > 1 && !multiFile) {
      seterror("Only one file allowed at a time...");
      if (onError) onError("No valid files found");
      return;
    } else if (fileArray.length === 0) {
      seterror("No valid files found");
      if (onError) onError("No valid files found");
      return;
    } else {
      onFilesAdded(fileArray);
    }
  };
  return (
    <div
      onDrop={onDrop}
      onDragOver={(e) => {
        e.preventDefault();
        setdropHovered(true);
      }}
      onDragLeave={() => {
        setdropHovered(false);
      }}
      className={className}
    >
      <input
        className="hidden"
        ref={fileInputRef}
        type="file"
        onChange={(e) => {
          e.target.files && onFilesInput(e.target.files);
        }}
      />
      {children(dropHovered, error, manualOpen)}
    </div>
  );
};

Dropzone.propTypes = {};

export default Dropzone;
