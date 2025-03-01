import React from "react";
import yourCodeImg from "../../assets/your-code.jpeg";
import "./portfolio.css";
const Portfolio = () => {
  return (
    <section className="portfolio-main">
      <div className="portfolio-center">
        <article className="portfolio-container">
          <img className="portfolio-img" src={yourCodeImg} alt="hello" />
          <span className="portfolio-text">
            Hello, my name is Nikoloz Macharashvili. I have been developing User
            Interfaces for over 4 years with React and Vue. I know SASS,
            Tailwind, BootStrap, MUI on the css side. And TypeScript, node,
            mongodb on the backendside.
          </span>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
