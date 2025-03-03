import "./logos.css";
import bootStrap from "../../assets/skill-logos/icons8-bootstrap-logo.svg";
import css from "../../assets/skill-logos/icons8-css-logo.svg";
import html from "../../assets/skill-logos/icons8-html-5.svg";
import javascript from "../../assets/skill-logos/icons8-javascript-logo.svg";
import materialUI from "../../assets/skill-logos/icons8-material-ui.svg";
import mongoDB from "../../assets/skill-logos/icons8-mongodb.svg";
import node from "../../assets/skill-logos/icons8-node-js.svg";
import react from "../../assets/skill-logos/icons8-react.svg";
import redux from "../../assets/skill-logos/icons8-redux.svg";
import sass from "../../assets/skill-logos/icons8-sass.svg";
import tailwind from "../../assets/skill-logos/icons8-tailwind-css.svg";
import typescript from "../../assets/skill-logos/icons8-typescript.svg";
import vue from "../../assets/skill-logos/icons8-vue-js.svg";

const Logos = () => {
  return (
    <div className="skills-logo-container">
      <div className="logo-wrapper">
        <img className="skills-logo" src={html} alt="html" />
        <span className="alt-text">html</span>
      </div>
      <div className="logo-wrapper">
        <img className="skills-logo" src={css} alt="css" />
        <span className="alt-text">css</span>
      </div>
      <div className="logo-wrapper">
        <img className="skills-logo" src={sass} alt="sass" />
        <span className="alt-text">sass</span>
      </div>
      <div className="logo-wrapper">
        <img className="skills-logo" src={tailwind} alt="tailwind" />
        <span className="alt-text">tailwind</span>
      </div>
      <div className="logo-wrapper">
        <img className="skills-logo" src={bootStrap} alt="bootStrap" />
        <span className="alt-text">bootStrap</span>
      </div>
      <div className="logo-wrapper">
        <img className="skills-logo" src={materialUI} alt="materialUI" />
        <span className="alt-text">materialUI</span>
      </div>
      <div className="logo-wrapper">
        <img className="skills-logo" src={javascript} alt="javascript" />
        <span className="alt-text">javascript</span>
      </div>
      <div className="logo-wrapper">
        <img className="skills-logo" src={react} alt="react" />
        <span className="alt-text">react</span>
      </div>
      <div className="logo-wrapper">
        <img className="skills-logo" src={redux} alt="redux" />
        <span className="alt-text">redux</span>
      </div>
      <div className="logo-wrapper">
        <img className="skills-logo" src={vue} alt="vue" />
        <span className="alt-text">vue</span>
      </div>
      <div className="logo-wrapper">
        <img className="skills-logo" src={node} alt="node" />
        <span className="alt-text">node</span>
      </div>
      <div className="logo-wrapper">
        <img className="skills-logo" src={mongoDB} alt="mongoDB" />
        <span className="alt-text">mongoDB</span>
      </div>
    </div>
  );
};

export default Logos;
