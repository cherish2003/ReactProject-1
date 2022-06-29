import React from 'react'
import secImg from "./Images/20945893.jpg";
function Section2() {
    return (
      <div className="section-2">
        <div className="sec2img">
          <img src={secImg} alt="" />
        </div>
        <div className="sec2cont">
          <div className="contHead">it's helpful for operating system</div>
          <div className="subCont">
            <div className="subhead">
              <i className="fa-solid fa-share ora"></i> Ultra fast & secure
            </div>
            <div className="head-para">
              Our applications and services typically use a multi-tenant
              approach, which means a single instance of the SaaS application
              will be running on the host servers.
            </div>
          </div>
          <div className="subCont">
            <div className="subhead">
              <i className="fa-solid fa-share gre"></i> Allows customization
            </div>
            <div className="head-para">
              Customization in SaaS is a process of developing software
              applications that suit a person or a firm’s particular needs.
            </div>
          </div>
          <div className="subCont">
            <div className="subhead">
              <i className="fa-solid fa-share blu"></i> Smart contract
            </div>
            <div className="head-para">
              Customers will be happy with the speed of these automated
              transactions, and SaaS businesses will love the efficiency of it
              all.
            </div>
          </div>
        </div>
      </div>
    );
}
export default Section2;