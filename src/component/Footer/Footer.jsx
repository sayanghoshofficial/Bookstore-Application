import React from "react";
import "./Footer.css";
import Logo from "../../Images/logo.png";
import { GitHub, Linkedin, Phone, Youtube } from "react-feather";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <div className="footerAddress">
          <img alt="startup-logo" src={Logo} />
          <p>Sayan Ghosh</p>
          <p>Freshers FrontEnd Developer</p>
          <p>
            <Phone /> +91-9999999999
          </p>
        </div>
        <div className="footerSection">
          <h3>Skills</h3>
          <ul>
            <li>Communication</li>

            <li> Time Management</li>

            <li>Critical thinking</li>
          </ul>
        </div>
        <div className="footerSection">
          <h3>Technology</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="footerSection">
          <h3>Projects</h3>
          <ul>
            <li>
              <a
                href="https://sayanghoshofficial.github.io/my-chat-app/"
                target="-blank"
              >
                React Chat App
              </a>
            </li>
            <li>
              <a
                href="https://sayanghoshofficial.github.io/my-contact-list-app/"
                target="-blank"
              >
                React Contact List
              </a>
            </li>
            <li>
              <a
                href="https://sayanghoshofficial.github.io/calculator-react/"
                target="-blank"
              >
                React Calculator
              </a>
            </li>
            <li>
              <a
                href="https://sayanghoshofficial.github.io/My-Music-Player/"
                target="-blank"
              >
                My Music Player
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottomNav">
        <div className="socialMedia">
          <a href="https://github.com/sayanghoshofficial" target="_blank">
            <GitHub />
          </a>
          <a
            href="https://www.linkedin.com/in/sayanghoshofficial/"
            target="_blank"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.youtube.com/channel/UClCLLStmE41ejOJZoZI237Q"
            target="_blank"
          >
            <Youtube />
          </a>
        </div>
        <div className="footerCopyRight">
          <p>
            © 2023{" "}
            <b>
              <a href="https://drive.google.com/file/d/19DZeDpIndJsk_M-8ynQ9AS_LR3e847NO/view?usp=sharing" target="_blank">
                Sayan Ghosh
              </a>
            </b>{" "}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
