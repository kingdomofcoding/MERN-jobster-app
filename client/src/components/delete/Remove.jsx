import React from "react";
import "./remove.css";
const Remove = ({ id, handleRemoveCredential }) => {
  const handleRemove = () => {
    handleRemoveCredential(id);
  };
  return (
    <span className="red-1" onClick={handleRemove}>
      D
    </span>
  );
};

export default Remove;
