import React from "react";
import "./header.css";
import "../../index.css";
import logo from "../../assets/brown-2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const linksRef = useRef(null);
  const linksContainer = useRef(null);
  const [toggle, setToggle] = useState(false);
  const showLinks = () => {
    setToggle((pre) => !pre);
    console.log(toggle);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight, "linksHeight");
    if (toggle) {
      linksContainer.current.style.height = `${linksHeight}px`;
      console.log(linksContainer.current, toggle);
    } else {
      linksContainer.current.style.height = "0";
      console.log(linksContainer.current, toggle);
    }
  }, [toggle]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" />
          <button className="nav-toggle" onClick={showLinks}>
            <GiHamburgerMenu className="hamburger" />
          </button>
        </div>
        <div className="links-container" ref={linksContainer}>
          <ul className="links" ref={linksRef}>
            <li className="link">
              <Link className="menu-link" to="/">
                Home
              </Link>
            </li>
            <li className="link">
              <Link className="menu-link" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <ul className="social-icons">
          <li>
            <a href="" className="social-link">
              <FaGoogle />
            </a>
          </li>
          <li>
            <a href="" className="social-link">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="" className="social-link">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
