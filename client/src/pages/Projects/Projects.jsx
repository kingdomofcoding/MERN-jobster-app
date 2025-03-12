import "./projects.css";
import eCommercePic from "../../assets/e-commerce.png";
import stockMarketPic from "../../assets/stock-market.png";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <section className="projects-container">
      <article className="projects-center">
        <div className="project-control">
          <div className="project">
            <a
              href="https://niko-e-commerce.netlify.app/"
              className="project-link"
              target="_blank"
            >
              <img
                className="project-pic"
                src={eCommercePic}
                alt="e-commerce"
              />
              <span className="project-title">e-commerce</span>
            </a>
          </div>
          <div className="project">
            <a
              href="https://greenlight-stocks.netlify.app/"
              className="project-link"
              target="_blank"
            >
              <img
                className="project-pic"
                src={stockMarketPic}
                alt="stock-market"
              />
              <span className="project-title"> stock market</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Projects;
