import React from 'react';
function Footer() {
    return (
      <div className="footer">
        <div className="footmain">
          <h1>
            <i className="fa-solid fa-cubes"></i> Codext
          </h1>
          <div className="footContent">
            Our proprietary database gives you insight into vendors and apps
            your employees are utilizing and what's available for use.
          </div>
          <div className="iconDivs">
            <div className="iconDiv">
              <i class="fa-brands fa-twitter fa-xl"></i>
            </div>
            <div className="iconDiv">
              <i class="fa-brands fa-facebook fa-xl"></i>
            </div>
            <div className="iconDiv">
              <i class="fa-brands fa-discord fa-xl"></i>
            </div>
            <div className="iconDiv">
              <i class="fa-brands fa-linkedin-in fa-xl"></i>
            </div>
          </div>
        </div>
        <div className="Resources">
          <div className="resHead">Resources</div>
          <a href="#  ">Services</a>
          <a href="#  ">Pricing</a>
          <a href="#  ">Testimonaials</a>
          <a href="#  ">Blog</a>
        </div>
        <div className="UsefulLinks">
          <div className="resHead">Useful links</div>
          <a href="#  ">Terms of Serivices</a>
          <a href="#  ">Privacy Policy</a>
          <a href="#  ">Cookie Policy</a>
          <a href="#  ">Contact us</a>
        </div>
        <div className="Newzletter">
          <div className="resHead">NewsLetter</div>
          <div className="newsPara">
            Sign up and receive the lastest news via email
          </div>
          <div>
            <input type="email" className="emailInt" placeholder='Email address' name="" id="" />
            <button type="button" className="Emailbtn">Send</button>
          </div>
        </div>
      </div>
    );
}
export default Footer;