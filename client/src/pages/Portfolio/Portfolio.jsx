import React from "react";
import yourCodeImg from "../../assets/your-code.jpeg";
import "./portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="portfolio-main">
      <div className="portfolio-center">
        <article className="portfolio-container">
          <img className="portfolio-img " src={yourCodeImg} alt="hello" />
          <div className="portfolio-text-container">
            <h1>Who I Am!</h1>
            <div className="portfolio-text-main">
              <span className="portfolio-text">
                Hello, my name is Nikoloz Macharashvili. I have been developing
                User Interfaces for over 4 years with React and Vue. For the
                past year I have been studying Node and Mongodb, and currently I
                have picked up UI/UX Design
              </span>
            </div>
            <div className="center left">
              <Link className="link-btn" to="/projects">
                <span className="text">Check Out My Projects</span>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
