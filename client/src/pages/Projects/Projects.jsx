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
            </a>
            <article className="text-container">
              <span className="project-title">e-commerce</span>
              <span className="project-description">
                Includes Oauth Authorization, Cart, filtering, Stripe Payment
              </span>
            </article>
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
            </a>
            <article className="text-container">
              <span className="project-title"> stock market</span>
              <span className="project-description">
                Includes Admin Page, Stock Products,View More, Modal, Product
                Page
              </span>
            </article>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Projects;
