import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import Patch from "./components/patch/Patch";
import Modal from "./modals/modal/Modal";
import Remove from "./components/delete/Remove";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import formImg from "./assets/form-image.png";
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesInTotal, setPagesInTotal] = useState([]);
  const [pageMessages, setPageMessages] = useState([]);
  const [activateModal, setActivateModal] = useState(false);
  const [userUpdateId, setUserUpdateId] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3009/api/v1/", {
        username,
        password,
      });
      console.log(response.data.credential, "---credentials---");
      if (response.data && response.data.credentials) {
        const { username: name, password: pass } = response.data.user;
        setMessages((prevMessages) => [...prevMessages, { name, pass }]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdateFromChild = (id) => {
    setActivateModal(true);
    setUserUpdateId(id);
  };
  const handleCloseModalFroMParent = (boolFalse) => {
    setActivateModal(boolFalse);
  };
  const handleUpdateCredentials = async (name, pass) => {
    try {
      const response = await axios.patch(
        `http://localhost:3009/api/v1/${userUpdateId}`,
        {
          id: userUpdateId,
          username: name,
          password: pass,
        }
      );

      const arr = messages.map((item) => {
        if (item._id === userUpdateId) {
          return {
            ...item,
            username: response.data.updated.username,
            password: response.data.updated.password,
          };
        }
        return item;
      });
      setMessages((pre) => arr);
    } catch (err) {
      console.log(err, `error coming from handleUpdateCredentials in App.jsx`);
    }
  };
  const handleRemoveCredential = async (id) => {
    console.log(id, "---x---");
    if (!id) {
      throw new Error(`no id`);
    }
    try {
      const response = await axios.delete(`http://localhost:3009/api/v1/${id}`);

      const leftoverMessages = messages.filter(
        (item) => item._id !== response.data.response._id
      );

      setMessages(leftoverMessages);
    } catch (err) {
      console.log(err);
    }
  };
  const pagination = (page) => {
    const limit = 5; // Define `limit`
    const totalPages = Math.ceil(messages.length / limit);

    // Calculate pages
    const pages = Array.from({ length: totalPages }, (_, i) => {
      const start = i * limit;
      const end = start + limit;
      return messages.slice(start, end);
    });
    const start = (page - 1) * limit;
    const end = start + limit;
    setPagesInTotal(pages);
    setPageMessages((pre) => messages.slice(start, end));
    setPage(page);
  };

  useEffect(() => {
    pagination(page);
  }, [messages]);
  const fetchAPI = async () => {
    try {
      const response = await axios("http://localhost:3009/api/v1/");
      if (response && response.statusText === "OK") {
        setMessages(response.data.credentials);
      } else {
        console.log(
          `fetchAPI fetching in App.jsx useEffect, something went wrong`
        );
      }
    } catch (err) {
      console.log(err, "fetching error - getAllTasks - api/v1/");
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div className="main">
      <Header></Header>
      <div className="container">
        <div className="big-content"></div>
        <Form></Form>
      </div>

      {/* <form className="form" onSubmit={handleSubmit}>
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
          <button className="button">Submit</button>
        </div>
      </form>
      <div className="form-controller-2">
        <div className="form-controller-2-1">
          {pageMessages.map((item, index) => {
            return (
              <div key={item._id} className="item">
                <span className="item-child-1">
                  {item.username} {item.password}
                </span>
                <span className="item-child-2">
                  <Patch
                    handlePassUpdateFromChild={handleUpdateFromChild}
                    id={item._id}
                  >
                    U
                  </Patch>
                  <Remove
                    id={item._id}
                    handleRemoveCredential={handleRemoveCredential}
                  ></Remove>
                </span>
              </div>
            );
          })}
        </div>
        <div className="pagination">
          {pagesInTotal.map((item, index) => {
            return (
              <span
                className={`${page === index + 1 ? "red" : "black"} page`}
                key={index}
                onClick={() => pagination(index + 1)}
              >
                {index + 1}
              </span>
            );
          })}
        </div>
      </div>
      {activateModal && (
        <Modal
          handleCloseModal={handleCloseModalFroMParent}
          handleUpdateCredentialsInChild={handleUpdateCredentials}
          userUpdateId={userUpdateId}
          messages={messages}
        ></Modal>
      )} */}
    </div>
  );
}

export default App;
