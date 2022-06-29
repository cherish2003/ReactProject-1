import React from 'react';
import toggleSwitch from './Functions';
function Section3() {
    return (
      <div className="Section-3">
        <div className="sec3head">
          <div className="sec3mainhead">Choose your best pricing plan</div>
          <div className="toggleSwitch">
            <div className="lefttxt">Added for monthly</div>
            <label className="switch" htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                onChange={toggleSwitch}
              ></input>
              <div className="slider round"></div>
            </label>
            <div className="righttxt">Yearly</div>
          </div>
        </div>
        <div className="sec3cards">
          <div className="card">
            <div className="pricinganimation"></div>
            <div className="cardmainheading">
              Start-up
              <div className="line"></div>
            </div>
            <div className="cardPrice">
              <span className="cpricehighlight">$10</span>/mo
            </div>
            <div className="cardes">
              <div className="des">Easy Customizable</div>
              <div className="des">Commercial license</div>
              <div className="des">Single user license</div>
              <div className="des">Hotline support 24/7</div>
            </div>
            <button type="button" className="packbtn">
              TRY THIS PACKAGE
            </button>
          </div>
          <div className="card">
            <div className="pricinganimation"></div>
            <div className="cardmainheading">
              Classic
              <div className="line"></div>
            </div>
            <div className="cardPrice">
              <span className="cpricehighlight">$30</span>/mo
            </div>
            <div className="cardes">
              <div className="des">Easy Customizable</div>
              <div className="des">Commercial license</div>
              <div className="des">5 user license</div>
              <div className="des">Hotline support 24/7</div>
            </div>
            <button type="button" className="packbtn">
              TRY THIS PACKAGE
            </button>
          </div>
          <div className="card">
            <div className="pricinganimation"></div>

            <div className="cardmainheading">
              Premium
              <div className="line"></div>
            </div>
            <div className="cardPrice">
              <span className="cpricehighlight">$49</span>/mo
            </div>
            <div className="cardes">
              <div className="des">Easy Customizable</div>
              <div className="des">Commercial license</div>
              <div className="des">10 user license</div>
              <div className="des">Hotline support 24/7</div>
            </div>
            <button type="button" className="packbtn">
              TRY THIS PACKAGE
            </button>
          </div>
        </div>
      </div>
    );
}

export default Section3;