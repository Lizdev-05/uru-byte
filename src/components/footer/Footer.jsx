import React from "react";
import style from "./Footer.module.css";
import uruLogo from "../../assets/uru-logo.png";

const Footer = () => {
  return (
    <div
      className={style.container}
      data-aos="zoom-out-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="3000"
    >
      <img src={uruLogo} alt="" className={style.footerImg} />
      <div className={style.footer}>
        <div>
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              {" "}
              <a href="#team">Team</a>
            </li>
            <li>
              {" "}
              <a href="#faq">FAQ</a>
            </li>
            <li>
              {" "}
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Features</h3>
          <ul>
            <li>Interactive Dashboards</li>
            <li>Advanced Analytics</li>
            <li>AI-Powered Insights</li>
            <li>Competitive Intelligence </li>
            <li>Customizable Reports</li>
          </ul>
        </div>
        <div>
          <h3>Help Center</h3>
          <ul>
            <li>Community</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h3>Download</h3>
          <p>
            Be part of the conversation and unlock the collective power of the
            African business community.
          </p>
          <a href="#contact" className={style.btnWarning}>
            Join Waitlist
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
