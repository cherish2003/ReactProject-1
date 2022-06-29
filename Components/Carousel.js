import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import img1 from "./Images/pexels-pixabay-220453.jpg";
import img2 from "./Images/pexels-italo-melo-2379004.jpg";
import img3 from "./Images/pexels-linkedin-sales-navigator-2182970.jpg";
import img4 from "./Images/pexels-hasibullah-zhowandai-819530.jpg";
import img5 from "./Images/pexels-andrea-piacquadio-3775087.jpg";
import img6 from "./Images/pexels-antoni-shkraba-8192052.jpg";
function ReviewCarousel() {
    return (
      <OwlCarousel items={3} autoPlay={true} dots={true} className="owl-theme">
        <div className="review">
          <div className="reviewPara">
            <p>
              <i class="fa-solid fa-quote-left quoatation"></i>
              It is best platform to discover interesting new software services
            </p>
          </div>
          <div className="reviwphoto">
            <div className="profilepic">
              <img src={img1} alt="" />
            </div>
            <div className="profileName"> Willam Bergson</div>
          </div>
        </div>
        <div className="review">
          <div className="reviewPara">
            <p>
              <i class="fa-solid fa-quote-left quoatation"></i>
              overall good company we can get desire software of our choice
            </p>
          </div>
          <div className="reviwphoto">
            <div className="profilepic">
              <img src={img2} alt="" />
            </div>
            <div className="profileName">Zaire Aminoff</div>
          </div>
        </div>
        <div className="review">
          <div className="reviewPara">
            <p>
              <i class="fa-solid fa-quote-left quoatation"></i>
              Communication tool made just right!
            </p>
          </div>
          <div className="reviwphoto">
            <div className="profilepic">
              <img src={img3} alt="" />
            </div>
            <div className="profileName">Ryan Press</div>
          </div>
        </div>
        <div className="review">
          <div className="reviewPara">
            <p>
              <i class="fa-solid fa-quote-left quoatation"></i>
              Great product and great team!
            </p>
          </div>
          <div className="reviwphoto">
            <div className="profilepic">
              <img src={img4} alt="" />
            </div>
            <div className="profileName">Jack Willam</div>
          </div>
        </div>
        <div className="review">
          <div className="reviewPara">
            <p>
              <i class="fa-solid fa-quote-left quoatation"></i>
              Time punctual and satisfactory product
            </p>
          </div>
          <div className="reviwphoto">
            <div className="profilepic">
              <img src={img5} alt="" />
            </div>
            <div className="profileName">Victoria</div>
          </div>
        </div>
        <div className="review">
          <div className="reviewPara">
            <p>
              <i class="fa-solid fa-quote-left quoatation"></i>
              Useful online payroll software for world businesses
            </p>
          </div>
          <div className="reviwphoto">
            <div className="profilepic">
              <img src={img6} alt="" />
            </div>
            <div className="profileName">Shin</div>
          </div>
        </div>
      </OwlCarousel>
    );
}
export default ReviewCarousel;