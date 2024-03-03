import React from "react";
import style from "./home.module.css";
import homeImg from "../../assets/Group16.png";

const About = () => {
  return (
    <section id="home">
      <div className={`container ${style.aboutContainer}`}>
        <div className={style.meContent}>
          <h1>Gain a Competitive Edge with Actionable Market Intelligence</h1>
          <p>
            Unlock critical insights on companies, topics, and industries across
            an extensive universe of content—including your own.
          </p>
          <a href="#contact" className="btn btn-primary">
            Join Waitlist
          </a>
          <a href="#contact" className="btn btn-primary">
            Contact Us
          </a>
        </div>
        <div className={style.homeRight}>
          <div className={style.homeImg}>
            <img src={homeImg} alt="Home image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
