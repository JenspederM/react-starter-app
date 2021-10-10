import React from "react";
import { createPortal } from "react-dom";

const RootPortal: React.FC = ({ children }) => {
  const appRoot = document.getElementById("root");
  return appRoot && createPortal(children, appRoot);
};

export default RootPortal;
