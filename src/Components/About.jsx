import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="about ">
      <div className="container">
        <div className="about_text ">
          <h1>Satisfying people hunger for simple pleasures.</h1>
          <div className="about_description">
            <h3>Where The Food’s As Good As The Root Beer.</h3>
            <p>
              May over was. Be signs two. Spirit. Brought said dry own firmament
              lesser best sixth deep abundantly bearing, him gathering you
              blessed bearing he our position best ticket in month hole deep.
            </p>
          </div>
          <Link to="/about">
            <a class=" btn abt-btn">READ MORE</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
