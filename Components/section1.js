import { React } from "react";
import sec1banner from "./Images/1032.jpg";
function Section1() {
    return (
      <div className="header">
        <div className="head-content">
          <div className="main-content">
            Codext one of the best system in SAAS
          </div>
          <div className="head-para">
            Our proprietary database gives you insight into vendors and apps
            your employees are utilizing and what's available for use.
          </div>
          <button type="button" className="Free-btn">
            Try A Live Demo
          </button>
        </div>
        <div className="head-img">
          <img src={sec1banner} alt="" />
        </div>
      </div>
    );
}
export default Section1;