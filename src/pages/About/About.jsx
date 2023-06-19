import React from "react";
import "./About.css";
import aboutImg from "../../Images/about.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About My Library</h2>
            <p className="fs-17">
              Beyond books, libraries offer a range of services and resources.
              They provide internet access, computers, and various multimedia
              materials. Libraries often organize workshops, seminars, and
              cultural events to promote literacy, creativity, and community
              engagement. These spaces foster a sense of curiosity and lifelong
              learning, encouraging individuals to broaden their horizons and
              pursue intellectual growth.
            </p>
            <p className="fs-17">
              In the digital age, libraries have evolved to embrace technology.
              Digital libraries and online databases provide access to a vast
              array of information, making knowledge more accessible than ever
              before. Libraries continue to adapt and innovate, embracing new
              technologies and digital tools to meet the evolving needs of their
              patrons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
