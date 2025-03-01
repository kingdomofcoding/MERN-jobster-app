import "./projects.css";
import eCommercePic from "../../assets/e-commerce.png";
import stockMarketPic from "../../assets/stock-market.png";
const Projects = () => {
  return (
    <section className="projects-container">
      <article className="projects-center">
        <div className="project-control">
          <div className="project">
            <img className="project-pic" src={eCommercePic} alt="e-commerce" />
            <a
              href="https://niko-e-commerce.netlify.app/"
              className="project-title"
              target="_blank"
            >
              e-commerce
            </a>
          </div>
          <div className="project">
            <img
              className="project-pic"
              src={stockMarketPic}
              alt="stock-market"
            />
            <a
              href="https://greenlight-stocks.netlify.app/"
              className="project-title"
              target="_blank"
            >
              stock market
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Projects;
