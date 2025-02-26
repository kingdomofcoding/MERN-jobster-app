import React from "react";
import "./modal.css";
import { useState, useEffect } from "react";
import { useRef } from "react";
const Modal = ({
  handleCloseModal,
  handleUpdateCredentialsInChild,
  userUpdateId,
  messages,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleUpdateCredentialsInChild(username, password);
    setUsername("");
    setPassword("");
    handleCloseModal(false);
    console.log("handleSubmit");
  };
  const myRef = useRef(null);
  const handleRef = (e) => {
    if (myRef.current && !myRef.current.contains(e.target)) {
      handleCloseModal(false);
    }
  };
  const handleC = () => {
    handleCloseModal(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleRef);
    return () => {
      document.removeEventListener("mousedown", handleRef);
    };
  }, []);
  useEffect(() => {
    const { username: name, password: pass } = messages.filter(
      (item) => item._id === userUpdateId
    )[0];

    setUsername(name);
    setPassword(pass);
  }, []);
  return (
    <div className="modal-background">
      <article className="modal-itself" ref={myRef}>
        <div className="update-btn-frame">
          <button onClick={handleC} className="update-btn">
            close
          </button>
        </div>
        <form className="form form-mode" onSubmit={handleSubmit}>
          <div className="form-controller-1">
            <input
              className="input input-first"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="input"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button">Update</button>
          </div>
        </form>
      </article>
    </div>
  );
};

export default Modal;
