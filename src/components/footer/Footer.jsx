import React from "react";
import style from "./Footer.module.css";
import uruLogo from "../../assets/uru-logo.png";

const Footer = () => {
  return (
    <div className={style.container}>
      <img src={uruLogo} alt="" className={style.footerImg} />
      <div className={style.footer}>
        <div>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Team</li>
            <li>FAQ</li>
            <li>Contact</li>
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
