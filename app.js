import { React } from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./Components/Navbar";
import Section1 from "./Components/section1";
import Section2 from './Components/section2';
import Features from "./Components/Feautures";
import Section3 from './Components/section3';
import Section4 from "./Components/section4";
import Section5 from "./Components/section5";
import Footer from "./Components/footer";
function App() {
    return (
      <div className="main">
        <NavBar></NavBar>
        <Section1></Section1>
        <Section2></Section2>
        <Features></Features>
        <Section3></Section3>
        <Section4></Section4>
        <Section5></Section5>
        <Footer></Footer>
        <div className="finalfoot">
          <div className="finalfoottxt">
            Copyright 2022 The Codext All Rights Revserved.
          </div>
        </div>
      </div>
    );
}
export default App;