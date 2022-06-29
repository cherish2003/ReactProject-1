import React from 'react';
import bg1 from './Images/meeting-1.jpg';
import bg2 from './Images/meeting-2.jpg';

function Section5() {
    return (
      <div className="Section5">
        <div className="sec5Head">Lastest insights news</div>
        <div className="subcont">
          <div className="sec5cont">
            <div className="newsimg">
              <img src={bg1} alt="" />
            </div>
            <div className="subtxt">
              <div className="txt">Our Creative Team</div>
              <div className="txt">17 June,2021</div>
              <div className="txt">by Steve Smith</div>
            </div>
            <div className="sec5sub">
              Running remote offsites and onbordings
            </div>
            <div className="sec5para">
              It's forced us to think about new ways that collaborating and team
              bonding can work — asynchronously and remotely. One of the biggest
              things we've realized is that it's not just about applying the way
              we used to work in the office to online settings, but also about
              finding ways of working and collaborating.
            </div>

            <button type="button" className="sec5but">
              Continue
            </button>
          </div>
          <div className="sec5cont">
            <div className="newsimg">
              <img src={bg2} alt="" />
            </div>
            <div className="subtxt">
              <div className="txt">Create Presentation</div>
              <div className="txt">17 June,2021</div>
              <div className="txt">by Thomas lewis</div>
            </div>
            <div className="sec5sub">
              Running remote offsites and onbordings
            </div>
            <div className="sec5para">
              Real time collaboration empowers employees, teams to come together
              and collaborate on a single digital platform independent of their
              individual locations. It allows multiple users to work
              simultaneously on projects in secure workspaces, without having to
              rely on face-to-face communication.
            </div>

            <button type="button" className="sec5but">
              Continue
            </button>
          </div>
        </div>
      </div>
    );
}
export default Section5;