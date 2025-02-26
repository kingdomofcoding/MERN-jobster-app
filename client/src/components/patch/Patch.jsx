import React from "react";
import "../../App.css";
import { useState } from "react";
const Patch = ({ children, handlePassUpdateFromChild, id }) => {
  const handleUpdate = () => {
    handlePassUpdateFromChild(id);
  };
  return (
    <span className="gold" onClick={handleUpdate}>
      {children}
    </span>
  );
};

export default Patch;
