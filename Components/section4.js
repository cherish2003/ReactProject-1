import React from 'react'
// import img1 from "./Images/secure.png";
import ReviewCarousel from "./Carousel";

function Section4() {
    return (
      <div className="Section4">
        <div className="sec4Head">
          <div className="sec4mainhead">Let's see our User's Reviews</div>
          <div className="sec4Subhead">
            It’s also interesting to note that over 90% of consumers aged 18-34
            say that they trust our service . These numbers shows a wide range
            of positive reviews for a SaaS product
          </div>
        </div>
        <div className="sec4carousel">
          <ReviewCarousel></ReviewCarousel>
        </div>
      </div>
    );
}
export default Section4;