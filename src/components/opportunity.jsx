import React from "react";
import opport1 from "../Assets/opport1.jpg";
import opport2 from "../Assets/opport2.jpg";
import opport3 from "../Assets/opport3.jpg";
import "../styles/opportunity.css";

const Opportunity = () => {
  return (
    <section className="opportunity-section">
      {/* Text Content */}
      <div className="text-container">
        <h3>Franchise Opportunities</h3>
        <h1>Franchise With Brave</h1>
        <p>
          Our franchise model empowers <br/>passionate educators to start and <br/>grow
          their own successful businesses.
        </p>
        <p><b>
          At Brave Sparkids Academy, we <br/>believe in the power of hands <br/>on
          learning.</b>
        </p>
        <a href="#!" className="cta-button">
          Know More
        </a>
      </div>

      {/* Image Content */}
      <div className="image-container">
        {/* Top Image with Overlay */}
        <div className="top-image">
          <div className="info-card">
            <h4>Revolutionize Education</h4>
            <p>
              Educational Programs are carefully crafted to stimulate
              intellectual and creative growth.
            </p>
          </div>
        </div>

        {/* Middle Images */}
        <div className="middle-images">
          <img src={opport2} alt="Middle educational opportunity" />
          <div className="middle2"><img src={opport1} alt="Another educational opportunity" />
        </div></div>

        {/* Bottom Image */}
        <div className="bottom-image">
          <img src={opport3} alt="Hands-on learning" />
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
