import { React } from "react";


function NavBar() {
    return (
      <div className="Navbar">
        <h1>
          <i className="fa-solid fa-cubes"></i> Codext
        </h1>
        <div className="NavItems">
          <ul className="Navul">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <button className="Free-btn">FREE TRIAL</button>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default NavBar;