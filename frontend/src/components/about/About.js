import React from "react";
import "./About.css";
import aboutImg from "../../assets/images/about-img.jpeg";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-container-row">
          <h2 className="about-container-title">
            <span className="about-container-title-color">About</span> Us
          </h2>
        </div>

        <div className="about-container-row">
          <div className="about-container-image">
            <img src={aboutImg} alt="About Us" />
          </div>
          <div className="about-container-content">
            <h4>What Makes Our Coffee Special?</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              consequatur expedita, assumenda repellat id eveniet, accusantium
              eligendi nulla hic sit magnam maiores nobis culpa aliquam, modi
              illum esse nihil amet?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              consequatur expedita
            </p>

            <button>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
