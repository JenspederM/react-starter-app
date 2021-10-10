import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { v4 as uuid } from "uuid";
const appRoot = document.getElementById("root");

type ToastOptions = {
  time?: number;
  icon?: "success" | "warning" | "error";
};

const Toast: (message: string, options?: ToastOptions) => void = (message, options) => {
  let div = document.getElementById("notification-center");
  if (!div) {
    div = document.createElement("div");
    div.setAttribute("id", "notification-center");
    if (appRoot) {
      appRoot.appendChild(div);
    } else {
      document.body.appendChild(div);
    }
  }

  const notificaionID = uuid();
  ReactDOM.render(
    <TheToast msg={message} options={options} notificaionID={notificaionID} />,
    div
  );
};

export default Toast;

const TheToast: React.FC<{ msg: string; options?: ToastOptions; notificaionID: string }> = ({
  msg,
  options,
  notificaionID,
}) => {
  const [showMsg, setshowMsg] = useState(true);
  useEffect(() => {
    setshowMsg(true);
    setTimeout(() => setshowMsg(false), options && options.time ? options.time : 2000);
  }, [msg, notificaionID, options]);

  if (showMsg)
    return (
      <div
        className="fixed top-0 -ml-32 w-64 mt-4 py-2 px-4 shadow-lg bg-white border border-gray-300 rounded flex items-center z-50"
        style={{ left: "50%" }}
      >
        {options?.icon && (
          <div className="h-8 w-8 mr-2">
            {options?.icon === "success" && <SuccessIcon />}
            {options?.icon === "warning" && (
              <WarningIcon className="text-yellow-500 w-full h-full" />
            )}
            {options?.icon === "error" && (
              <WarningIcon className="text-red-500 w-full h-full" />
            )}
          </div>
        )}
        <div className="text-xs">{msg}</div>
      </div>
    );
  else return <div></div>;
};

const SuccessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="text-green-400 w-full h-full"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    />
  </svg>
);

const WarningIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className || ""}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
      ></path>
    </svg>
  );
};
