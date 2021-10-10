import React, { useState } from "react";
import { Popup } from "components/basic/Popup";

interface Props {
  onDelete: () => Promise<void>;
  buttonText: string;
  warningHeadline?: string;
}

const ConfirmDeleteButton: React.FC<Props> = ({ onDelete, buttonText, warningHeadline }) => {
  const [loading, setLoading] = useState(false);
  return (
    <Popup
      mt={-60}
      content={(closeDeletePopup) => {
        return (
          <div className="text-xs px-2 py-2 border border-gray-200 rounded">
            <div className="font-medium">{warningHeadline || "Delete?"}</div>
            <div className="italic mb-2">
              This is a destructive event that can't be undone!
            </div>
            <div className="flex">
              <div className="w-1/2 pr-1">
                <button
                  className={`button-small border-red-400 bg-red-400 text-white w-full ${
                    loading ? "opacity-50" : ""
                  }`}
                  onClick={() => {
                    if (!loading) {
                      setLoading(true);
                      onDelete()
                        .then(() => {})
                        .catch(() => setLoading(false));
                      closeDeletePopup();
                    }
                  }}
                >
                  Delete
                </button>
              </div>
              <div className="w-1/2 pl-1">
                <button
                  className={`button-small w-full`}
                  onClick={() => {
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
      <button className={`button-popup text-red-500`}>{buttonText}</button>
    </Popup>
  );
};

export default ConfirmDeleteButton;
