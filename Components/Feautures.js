import {React} from 'react';
import cc from "./Images/web-programming.png";
import da from "./Images/data-analytics.png";
import sec from "./Images/secure.png";
import mail from "./Images/mail.png";
function Features(){
    return (
      <div className="FeaturesDiv">
        <div className="featureHeading">
          <div className="feah"> We Provide best Features</div>
          <div className="feah"> For Our Customers</div>
        </div>
        <div className="FeaturesItems">
          <div className="featureItem">
            <div className="imgdiv fi-1">
              <img src={cc} alt="" />
            </div>
            <div className="featureItemSubhead">Clean Code</div>
            <div className="fipara">
              Clean code helps you to easily understand and change the code.
            </div>
            <div className="animationdiv"></div>
          </div>
          <div className="featureItem">
            <div className="imgdiv fi-2">
              <img src={da} alt="" />
            </div>
            <div className="featureItemSubhead">Data Analytic</div>
            <div className="fipara">
              enables organizations to analyze all their data to identify
              patterns and generate insights
            </div>
            <div className="animationdiv"></div>
          </div>
          <div className="featureItem">
            <div className="imgdiv fi-3">
              <img src={sec} alt="" />
            </div>
            <div className="featureItemSubhead">Fully secured</div>
            <div className="fipara">
              we covers a range of practices that companies implement to protect their assets
            </div>
            <div className="animationdiv"></div>
          </div>
          <div className="featureItem">
            <div className="imgdiv fi-4">
              <img src={mail} alt="" />
            </div>
            <div className="featureItemSubhead">24/7 Support</div>
            <div className="fipara">
              We combine technology to procter cloud  with specialized engineers and proactive
            </div>
            <div className="animationdiv"></div>
          </div>
        </div>
      </div>
    );
}
export default Features;