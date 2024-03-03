import React from "react";
import style from "./Home.module.css";
import homeImg from "../../assets/Rectangle.png";

const About = () => {
  return (
    <section id="home">
      <div className={`container ${style.homeContainer}`}>
        <div className={style.homeContent}>
          <h1>Gain a Competitive Edge with Actionable Market Intelligence</h1>
          <p>
            Unlock critical insights on companies, topics, and industries across
            an extensive universe of content—including your own.
          </p>
          <a href="#contact" className="btn-warning">
            Join Waitlist
          </a>
          <a href="#contact" className="btn-secondary">
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
